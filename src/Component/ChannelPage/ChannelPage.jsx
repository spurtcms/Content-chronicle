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
      },
      
      "entryFilter": {
        "channelId": 1,
      },
      "AdditionalData": {
        "authorDetails": true,
        "categories": true
      }
    }

   const postdatalist=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)


  
  let variable_slug = {
    
    "channelSlug": slug,
    
  };
  
  const postdata=await fetchGraphQl(GET_POSTS_CHANNELLIST_SLUG_QUERY, variable_slug)

  if(!postdata){
    return notFound();
  }
  return (
   <>
   <ChannelServerAction data={postdata} postdatalist={postdatalist}/>
   </>
  )
}
