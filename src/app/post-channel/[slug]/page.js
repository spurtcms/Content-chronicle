import ChannelPage from '@/Component/ChannelPage/ChannelPage'
import { fetchGraphQl } from '@/app/api/graphicql';
import { GET_POSTS_LIST_QUERY } from '@/app/api/query';
import React from 'react'

export async function generateMetadata({params}) {

  console.log(params,"ssaparams")
  let variable_list = {
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
