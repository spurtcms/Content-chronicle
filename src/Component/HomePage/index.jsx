import React from 'react'
import HomePageAction from './HomePage'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_CHANNELLIST_QUERY, GET_POSTS_LIST_QUERY } from '@/app/api/query'

async function Home() {
    let variable_category={
      "filter": {
        "limit": 10,
        "offset": 0,  
      }
      
    }
    const postchannel=await fetchGraphQl(GET_POSTS_CHANNELLIST_QUERY,variable_category) 

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

    const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)

    console.log(postchannel,'postchannel',Listdata);


  return (

    <>
   <HomePageAction postchannel={postchannel?.ChannelList?.channellist} Listdata={Listdata?.ChannelEntriesList?.channelEntriesList}/>
    </>
  )
}

export default Home
