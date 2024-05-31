import ChannelPage from '@/Component/ChannelPage/ChannelPage'
import { fetchGraphQl } from '@/app/api/graphicql';
import { GET_POSTS_LIST_QUERY } from '@/app/api/query';
import React from 'react'

export async function generateMetadata({params}) {

  let variable_list = { limit: 20, offset: 0 };

const datas=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)
 let title=''
 let description=''
 datas?.channelEntriesList?.channelEntriesList.map((response)=>{
  
    if(response.slug==params.slug){
      title = response.metaTitle
      description=response.metaDescription
    }
  })
  return {
    title,
    description,
  };
 
}

export default function page({params}) {
  return (
   <>
   <ChannelPage params={params}/>
   </>
  )
}
