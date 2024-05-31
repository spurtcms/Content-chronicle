"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ImageComponent from '../ImageComponent';
import moment from 'moment';
import ChannelPageSkeleton from '../../utilities/SkeletonLoader/ChannelPageSkeleton';

export default function ChannelServerAction({data,postdatalist}) {
    const [skeleton,setSkeleton]=useState(true)

    const ChannelList = postdatalist?.channelEntriesList?.channelEntriesList.filter(
        (response) => response.channelId === data?.channelDetail?.id
      );

      let FeatureChannel=[]
      ChannelList.map((data,index)=>{
        
        if(data.featuredEntry==1){
            FeatureChannel.push(data)
        }
      })


      useEffect(()=>{
        if(data&&postdatalist&&postdatalist.length!=0){
            setSkeleton(false)
        }
       
      },[])
  return (
   <>

  
   {skeleton?
   <>
  
   <ChannelPageSkeleton/>
   </>
   :
    <main className=" min-h-screen p-4 md:p-8 lg:p-20  max-w-screen-2xl m-auto">
    <div className="flex flex-col gap-1 pb-6 border-b border-gray-200">
        <h6 className="text-gray-500 text-base font-light leading-5">Category</h6>
        <h3 className="text-black text-[32px] font-medium leading-10">
            {data?.channelDetail?.channelName}
        </h3>
    </div>
        {FeatureChannel&&FeatureChannel.map((response,index)=>(
        <>
        
            <div className="py-6 border-b border-gray-200">
        <div className="flex gap-6 sm:flex-row flex-col-reverse">
            <div className="w-full lg:w-[33%]">
                <h2 className="text-black mb-2 text-4xl leadin-[45px]">
                    {response?.title}
                    </h2>
                <div className="text-gray-500 font-light text-base leading-5 mb-4 line-clamp-des"
                dangerouslySetInnerHTML={{
                    __html: response?.description,
                    }}>
                </div>
                <div className="flex items-center gap-3">
                {response?.authorDetails?.ProfileImagePath
                    ?
                    (
                    <ImageComponent src={response?.authorDetails?.ProfileImagePath} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                    )
                
                    :
                    <>
                    <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                    {/* {`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`.charAt(0)} */}
                    <img src="/img/user1.jpg" />
                    </div>
                    </>
                    }
                    {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                    <div className="flex items-center gap-2">
                        <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`}</h3>
                        <p className=" text-gray-500 text-xs font-light">
                        {moment(response?.createdOn).format("MMM DD, YYYY")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[67%]">
            <ImageComponent src={response?.coverImage} w={500} h={500} alt={"Picture of the author"} className="w-full"/>
                {/* <img src="/img/blog-details-4.png" className="w-full" /> */}
            </div>
        </div>
            </div>
        
            </>))}
    <div className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
            {ChannelList.map((response,index)=>(
                response?.featuredEntry!==1&&
                <>
                <div className="flex flex-col gap-4 group">
                <Link href="#">
                <ImageComponent src={response?.coverImage} w={500} h={500} alt={"Picture of the author"} className="w-full"/>
                    {/* <img src="/img/blog-details-3.png" /> */}
                </Link>
                <div className="w-full">
                    <Link href="#" className="group-hover:text-activeblue-500 group-hover:underline text-black text-lightxl lg:text-2xl font-medium leading-7 line-clamp-2">
                        {response?.title}
                    </Link>
                    <div className="text-gray-500 font-light text-lightbase lg:text-base leading-5 mb-4 mt-2 line-clamp-des"
                    dangerouslySetInnerHTML={{
                        __html: response?.description,
                        }}
                    />
                        
                    <div className="flex items-center gap-3">
                    {response?.authorDetails?.ProfileImagePath
                    ?
                    (
                    <ImageComponent src={response?.authorDetails?.ProfileImagePath} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                    )
                
                    :
                    <>
                    <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                    {/* {`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`.charAt(0)} */}
                    <img src="/img/user1.jpg" />
                    </div>
                    </>
                    }
                        {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                        <div className="flex items-center gap-2">
                            <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`}</h3>
                            <p className=" text-gray-500 text-xs font-light">{moment(response?.createdOn).format("MMM DD, YYYY")}</p>
                        </div>
                    </div>
                </div>
                </div>
                </>
            ))}
            
        </div>
    </div>
    
    </main>
   }
   
   
   </>
  )
}


                 