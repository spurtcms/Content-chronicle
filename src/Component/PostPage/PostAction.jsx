import React from 'react'
import PostServerAction from './PostServerAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_LIST_QUERY, GET_POSTS_SLUG_QUERY } from '@/app/api/query'
// import ErrorPage from '@/app/not-found'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}) {

  console.log(params,"paramaaaaas");

  let variable_slug={
    
    "slug": params.slug,
    "AdditionalData": {
      "authorDetails": true,
      "categories": true
    }
    
  }

  console.log(variable_slug,"variable_slugggggggggggg");

  const postesdfs=await fetchGraphQl(GET_POSTS_SLUG_QUERY, variable_slug)

 let title=postesdfs?.ChannelEntryDetail?.title
 
 let description=postesdfs?.ChannelEntryDetail?.metaDescription


  return {
    title,
    description,
  };

}

export default async function PostAction({params}) {
 
  console.log(params,"dfghjk");

    let {slug}=params

    let variable_slug={
    
      "slug": params?.slug,
      "AdditionalData": {
        "authorDetails": true,
        "categories": true
      }
      
    }

   console.log(variable_slug,"variable_slugggg");
  
    const postes=await fetchGraphQl(GET_POSTS_SLUG_QUERY, variable_slug)

    console.log(postes,"postesooooo");
  
  let variable_list ={
    "commonFilter": {
      "limit": 10,
      "offset": 0,
      "keyword":""
    },
    "entryFilter": {
      "Status": "Publish"
    },
    "AdditionalData": {
      "categories": true,
      "authorDetails": true
    }
  }
  console.log(variable_list,"variable_listttttttt");

  const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)

  console.log(Listdata,"ListdataLLLLLLLLL");

  // if(postes?.ChannelEntryDetail?.slug != slug){
  //   return notFound();
  // }

if(!postes){
  return notFound()
}

  return (
    <>
    <PostServerAction data={postes} listdata={Listdata} params={params}/>
    </>
  )
}
