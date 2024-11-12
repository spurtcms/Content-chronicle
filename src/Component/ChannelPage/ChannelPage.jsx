import React from 'react'
import ChannelServerAction from './ChannelServerAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_CHANNELLIST_SLUG_QUERY, GET_POSTS_LIST_QUERY } from '@/app/api/query'
import { notFound } from 'next/navigation'
// import ErrorPage from '@/app/not-found'


export default async function ChannelPage({params}) {

    let {slug}=params

   

    let variable_list={
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
    console.log(variable_list,"variable_listnnnnn");

   const postdatalist=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)

    console.log(postdatalist,"postdatalistzzzz");
  
  let variable_slug = {
    
    "channelSlug": slug,
    
  };
  



  const postdata=await fetchGraphQl(GET_POSTS_CHANNELLIST_SLUG_QUERY, variable_slug)

  console.log(postdata,"postdatajljljljl");

  if(!postdata){
    return notFound();
  }
  return (
   <>
   <ChannelServerAction data={postdata} postdatalist={postdatalist}/>
   </>
  )
}
