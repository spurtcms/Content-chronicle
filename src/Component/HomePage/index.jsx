import React from 'react'
import HomePageAction from './HomePage'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_CHANNELLIST_QUERY, GET_POSTS_LIST_QUERY } from '@/app/api/query'

async function Home() {
    let variable_category={"limit": 50, "offset":0,"hierarchylevel": 0}
    const postchannel=await fetchGraphQl(GET_POSTS_CHANNELLIST_QUERY,variable_category) 
    let variable_list = { limit: 50, offset: 0 };

    const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY, variable_list)

  return (

    <>
   <HomePageAction postchannel={postchannel?.channelList?.channellist} Listdata={Listdata?.channelEntriesList?.channelEntriesList}/>
    </>
  )
}

export default Home
