"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ImageComponent from '../ImageComponent'
import moment from 'moment'
import PostPageSkeleton from '../../utilities/SkeletonLoader/PostPageSkeleton'

export default function PostServerAction({ data,listdata,params}) {
    const [skeleton,setSkeleton]=useState(true)
   

    const postdata = listdata?.channelEntriesList?.channelEntriesList?.filter(
        (response) => response?.channelId == data?.channelEntryDetail?.channelId
      );

      useEffect(()=>{
         if(data&&listdata&&listdata.length!=0){
            setSkeleton(false)
         }
      },[])

  return (
        <>   
            {skeleton?
            <PostPageSkeleton/>
            :
            <main className=" min-h-screen p-4 md:p-8 lg:p-20   max-w-screen-2xl m-auto">
                {data&&(<>
                <div className="px-0 lg:px-[100px] pb-4 border-b border-gray-200 mb-6">
                    <h6 className="text-black text-base leading-5 font-medium mb-1">
                    {data?.channelEntryDetail?.categories[0].at(-1).categoryName}
                    </h6>
                    <h3 className="text-black text-lightxl lg:text-4xl lg:leading-[45px] font-medium mb-4">
                    {data?.channelEntryDetail?.title}
                        </h3>
                    {/* <p className="text-gray-500 text-lightbase lg:text-base font-light mb-6 leading-5">We’re asking for feedback on a proposed Acceptable Use Policy update to address the use of synthetic and manipulated media We’re asking for feedback on a proposed Acceptable Use Policy update to address the use of synthetic and manipulated media.</p> */}
                    
                    <ImageComponent src={data?.channelEntryDetail?.coverImage} w={500} h={500} alt={"Picture of the author"} className={"w-full"}/> 
                    {/* <img src="/img/blog-img5.png" className="w-full" /> */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3">
                                        {data?.channelEntryDetail?.authorDetails?.ProfileImagePath
                                            ?
                                            (
                                                <ImageComponent src={data?.channelEntryDetail?.authorDetails?.ProfileImagePath} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/> 
                                            )
                                            
                                            :
                                            <>
                                            <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                                            {`${data?.channelEntryDetail?.authorDetails?.FirstName} ${data?.channelEntryDetail?.authorDetails?.LastName}`.charAt(0)}
                                            </div>
                                            </>
                                        }
                        
                            {/* <img src="/img/blog-img1.png" /> */}
                            <p className="text-black font-normal text-sm">
                            {`${data?.channelEntryDetail?.authorDetails?.FirstName} ${data?.channelEntryDetail?.authorDetails?.LastName}`}
                            </p>
                        </div>
                        <p className=" text-gray-500 text-xs font-light">
                        {moment(data?.channelEntryDetail?.createdOn).format(
                                        "MMM DD, YYYY"
                                    )}
                            </p>
                    </div>
                    <div className="w-full h-px bg-gray-200 mt-4 mb-6"></div>
                    <div className="mb-4">
                        {/* <h3 className="text-lightxl lg:text-2xl font-medium leading-7 text-black mb-2">Semi-automating repetitive tasks</h3> */}
                        <div className="text-gray-500 text-lightbase lg:text-base leading-6 font-normal"
                        dangerouslySetInnerHTML={{
                            __html: data?.channelEntryDetail?.description,
                            }}>
                        
                        </div>
                    </div>
                    
                </div>
                </>)}
                <div>

                    {postdata.length>1&&(<>
                    <h3 className="text-black mb-6 text-2xl font-medium leading-7">Related Posts</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                    {postdata &&
                            postdata.map((result) => (
                            <>
                                {result.id !== data?.channelEntryDetail?.id ? (
                                <>
                                <div className="flex flex-col gap-4 group">
                                            <Link href="#">
                                            <ImageComponent src={result?.coverImage} w={500} h={500} alt={"Picture of the author"} className={"w-full rounded"}/> 
                                                {/* <img src="/img/blog-details-3.png" /> */}
                                            </Link>
                                            <div className="w-full">
                                                <Link href="#" className="group-hover:text-activeblue-500 group-hover:underline text-black text-lightxl lg:text-2xl font-medium leading-7">
                                                    {result?.title}
                                                </Link>
                                                <div className="text-gray-500 font-light text-lightbase lg:text-base leading-5 mb-4 mt-2 line-clamp-des"
                                                    dangerouslySetInnerHTML={{
                                                    __html: result.description,
                                                    }}
                                                />     
                                                <div className="flex items-center gap-3">
                                                {result.authorDetails.ProfileImagePath?
                                                <ImageComponent src={result.authorDetails.ProfileImagePath} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>    
                                                :
                                                <>
                                                {`${result.authorDetails.FirstName} ${result.authorDetails.LastName}`.charAt(0)}
                                                </>
                                                }
                                                    {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-black text-sm font-normal">
                                                        {`${result.authorDetails.FirstName} ${result.authorDetails.LastName}`}
                                                        </h3>
                                                        <p className=" text-gray-500 text-xs font-light">{moment(result.createdOn).format("MMM DD, YYYY")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </>
                                ) : (
                                ""
                                )}
                            </>
                                ))}
                        
                        
                    </div>
                </>)}
                </div>
            </main>
            }
            
            
        </>
    )
}

