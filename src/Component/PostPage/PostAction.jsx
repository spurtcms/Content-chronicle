import React from 'react'
import PostServerAction from './PostServerAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_LIST_QUERY, GET_POSTS_SLUG_QUERY } from '@/app/api/query'
// import ErrorPage from '@/app/not-found'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}) {


  let variable_slug={
    
    "slug": params.slug,
    "AdditionalData": {
      "authorDetails": true,
      "categories": true
    }
    
  }


  const postesdfs=await fetchGraphQl(GET_POSTS_SLUG_QUERY, variable_slug)

 let title=postesdfs?.ChannelEntryDetail?.title
 
 let description=postesdfs?.ChannelEntryDetail?.metaDescription


  return {
    title,
    description,
  };

}

export default async function PostAction({params}) {
 

    let {slug}=params

    let variable_slug={
    
      "slug": params?.slug,
      "AdditionalData": {
        "authorDetails": true,
        "categories": true
      }
      
    }

  
    const postes=await fetchGraphQl(GET_POSTS_SLUG_QUERY, variable_slug)

  
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

  const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)


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
