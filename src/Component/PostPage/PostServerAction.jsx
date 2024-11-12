"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ImageComponent from '../ImageComponent'
import moment from 'moment'
import PostPageSkeleton from '../../utilities/SkeletonLoader/PostPageSkeleton'
import { imageUrl } from '@/utilities/ImagePath'

export default function PostServerAction({ data,listdata,params}) {

   
   

    const [skeleton,setSkeleton]=useState(true)
    // const [catNo, setCatNo] = useState()

    const postdata = listdata?.ChannelEntriesList?.channelEntriesList?.filter(
        (response) => response?.channelId == data?.channelEntryDetail?.channelId
      );


      useEffect(()=>{
 
         if(data&&listdata&&listdata.length!=0){
            setSkeleton(false)
         }
      },[])

    //   const catgoId = params.slug

    //   useEffect(() => {
    //     setCatNo(catgoId)
    //   }, [catgoId])

    console.log(data,"dfghjkl");

    const imagepic = data?.ChannelEntryDetail?.coverImage || "/img/no-image.png";

  return (
        <>   
            {skeleton?
            <PostPageSkeleton/>
            :
            <main className=" min-h-screen p-4 md:p-8 lg:p-20   max-w-screen-2xl m-auto">
                {data&&(<>
                <div className="px-0 lg:px-[100px] pb-4 border-b border-gray-200 mb-6">
                    <h6 className="text-black text-base leading-5 font-medium mb-1">
                    {data?.ChannelEntryDetail?.categories[0].at(-1).categoryName}
                    </h6>
                    <h3 className="text-black text-lightxl lg:text-4xl lg:leading-[45px] font-medium mb-4">
                    {data?.ChannelEntryDetail?.title}
                    </h3>
                    {/* <p className="text-gray-500 text-lightbase lg:text-base font-light mb-6 leading-5">We’re asking for feedback on a proposed Acceptable Use Policy update to address the use of synthetic and manipulated media We’re asking for feedback on a proposed Acceptable Use Policy update to address the use of synthetic and manipulated media.</p> */}
                    
                    {/* <ImageComponent src={`${data?.ChannelEntryDetail?.coverImage}`} w={500} h={500} alt={"Picture of the author"} className={"w-full post-img"}
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "/img/no-image.png";
                    }}/>  */}

                     <ImageComponent
                src={imagepic}
                w={500}
                h={500}
                alt={"Picture of the author"}
                className={"w-full post-img"}
               
            />



                    {/* <img src="/img/blog-img5.png" className="w-full" /> */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3">
                                        {data?.ChannelEntryDetail?.authorDetails?.profileImagePath
                                            ?
                                            (
                                                <ImageComponent src={`${imageUrl}${data?.ChannelEntryDetail?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/> 
                                            )
                                            
                                            :
                                            <>
                                            <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                                            {`${data?.ChannelEntryDetail?.authorDetails?.FirstName} ${data?.ChannelEntryDetail?.authorDetails?.LastName}`.charAt(0)}
                                            </div>
                                            </>
                                        }
                        
                            {/* <img src="/img/blog-img1.png" /> */}
                            <p className="text-black font-normal text-sm">
                            {`${data?.ChannelEntryDetail?.authorDetails?.firstName} ${data?.ChannelEntryDetail?.authorDetails?.lastName}`}
                            </p>
                        </div>
                        <p className=" text-gray-500 text-xs font-light">
                        {moment(data?.ChannelEntryDetail?.createdOn).format(
                                        "MMM DD, YYYY"
                                    )}
                            </p>
                    </div>
                    <div className="w-full h-px bg-gray-200 mt-4 mb-6"></div>
                    <div className="mb-4">
                        {/* <h3 className="text-lightxl lg:text-2xl font-medium leading-7 text-black mb-2">Semi-automating repetitive tasks</h3> */}
                        <div className="text-gray-500 text-lightbase lg:text-base leading-6 font-normal desc"
                        dangerouslySetInnerHTML={{
                            __html: data?.ChannelEntryDetail?.description.replaceAll("<br>"," "),
                            }}>
                        
                        </div>
                    </div>
                    
                </div>
                </>)}
                <div>

                    {postdata?.length>1&&(<>
                    <h3 className="text-black mb-6 text-2xl font-medium leading-7">Related Posts</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                    {postdata &&
                            postdata.map((result) => (
                            <>
                                {result.id !== data?.ChannelEntryDetail?.id ? (
                                <>
                                <div className="flex flex-col gap-4 group">
                                            <Link href={`/posts/${result?.slug}`}>
                                            <ImageComponent src={`${result?.coverImage}`} w={500} h={500} alt={"Picture of the author"} className={"w-full rounded"}/> 
                                                {/* <img src="/img/blog-details-3.png" /> */}
                                            </Link>
                                            <div className="w-full">
                                                <Link href={`/posts/${result?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-lightxl lg:text-2xl font-medium leading-7">
                                                    {result?.title}
                                                </Link>
                                                <div className="text-gray-500 font-light text-lightbase lg:text-base leading-5 mb-4 mt-2 line-clamp-des desc"
                                                    dangerouslySetInnerHTML={{
                                                    __html: result?.description?.replaceAll("<br>"," "),
                                                    }}
                                                />     
                                                <div className="flex items-center gap-3">
                                                {result?.authorDetails?.profileImagePath?
                                                <ImageComponent src={`${imageUrl}${result?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>    
                                                :
                                                <>
                                                {`${result?.authorDetails?.firstName} ${result?.authorDetails?.lastName}`.charAt(0)}
                                                </>
                                                }
                                                    {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-black text-sm font-normal">
                                                        {`${result?.authorDetails?.firstName} ${result?.authorDetails?.lastName}`}
                                                        </h3>
                                                        <p className=" text-gray-500 text-xs font-light">{moment(result?.createdOn).format("MMM DD, YYYY")}</p>
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

