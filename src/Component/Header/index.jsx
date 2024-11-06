import React from 'react'
import HeaderServerAction from './HeaderServerAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_CHANNELLIST_QUERY } from '@/app/api/query'

async function Header() {
    let variable_category={
      "filter": {
        "limit": 10,
        "offset": 0,  
      },
      
    }
    const postchannel=await fetchGraphQl(GET_POSTS_CHANNELLIST_QUERY,variable_category) 

    console.log(postchannel,"postchannelmmmm");
    
   
  return (
    <>
    <HeaderServerAction postchannel={postchannel?.ChannelList?.channellist}/>
    </>
  )
}

export default Header
