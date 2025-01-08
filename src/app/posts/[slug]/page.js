import PostAction from '@/Component/PostPage/PostAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_SLUG_QUERY } from '@/app/api/query'
import React from 'react'



export default function page({params}) {

  return (
    <>
    <PostAction params={params}/>
    </>
  )
}

