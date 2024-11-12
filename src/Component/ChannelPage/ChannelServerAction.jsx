"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ImageComponent from '../ImageComponent';
import moment from 'moment';
import ChannelPageSkeleton from '../../utilities/SkeletonLoader/ChannelPageSkeleton';
import { imageUrl } from '@/utilities/ImagePath';
import NodataImg from '../NodataImg';

export default function ChannelServerAction({data,postdatalist}) {

    console.log(data,"nnbnbnbnns",postdatalist);

    const [skeleton,setSkeleton]=useState(true)

    const ChannelList = postdatalist?.ChannelEntriesList?.channelEntriesList?.filter((response) => (response?.channelId) === data?.ChannelDetail?.id);

      console.log(ChannelList,"ChannelListlklklk");

      let FeatureChannel=[]
      ChannelList?.map((data,index)=>{
        
        if(data.featuredEntry==1){
            FeatureChannel.push(data)
            console.log(FeatureChannel,"FeatureChannelklklk");
        }
      })


      useEffect(()=>{
        if(data&&postdatalist&&postdatalist.length!=0){
            setSkeleton(false)
        }
       
      },[])


      console.log(ChannelList,"lehgth");
      console.log(data,"drdrdrdr");

      const imagepic = data?.ChannelEntryDetail?.coverImage || "/img/no-image.png";
  return (
   <>

  
   {skeleton?
   <>
  
   <ChannelPageSkeleton/>
   </>
   :
   <>
   {ChannelList&&ChannelList?.length > 0 ?
    <main className=" min-h-screen p-4 md:p-8 lg:p-20  max-w-screen-2xl m-auto">
    <div className="flex flex-col gap-1 pb-6 border-b border-gray-200">
        <h6 className="text-gray-500 text-base font-light leading-5">Category</h6>
        <h3 className="text-black text-[32px] font-medium leading-10">
            {data?.ChannelDetail?.channelName}
        </h3>
    </div>
       
    <div className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
        {console.log(ChannelList, "jujuuuuuu")}
            {ChannelList.map((response,index)=>(
                response?.featuredEntry!==1&&
                <>{console.log(response,"responseeeeee")}
                <div className="flex flex-col gap-4 group">
                <Link href={`/posts/${response?.slug}`}>

               {response?.coverImage ?    
                <ImageComponent src={`${response?.coverImage}`} w={500} h={500} alt={"Picture of the author"} className="w-full c-image" /> :
                <>
                    <img src="/img/no-image.png" style={{ position: 'relative', height: '209px', width: '100%' }}/>
                </>
                 }
                    {/* <img src="/img/blog-details-3.png" /> */}
                </Link>
                <div className="w-full">
                    <Link href={`/posts/${response?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-lightxl lg:text-2xl font-medium leading-7 line-clamp-2">
                        {response?.title}
                    </Link>
                    <div className="text-gray-500 font-light text-lightbase lg:text-base leading-5 mb-4 mt-2 line-clamp-des desc"
                    dangerouslySetInnerHTML={{
                        __html: response?.description.replaceAll("<br>"," "),
                        }}
                    />
                        
                    <div className="flex items-center gap-3">
                        {console.log(response,"responsevvv")}
                    {response?.authorDetails?.profileImagePath ?
                        <>
                
                         <ImageComponent src={`${imageUrl}${response?.authorDetails?.profileImagePath}`} w={40} h={40} alt={""} className={"rounded-full"}/>  
                         </> :             
                         
                         <>
                        <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full  bg-slate-300'>
                             {/* {`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`.charAt(0)} */}
                         <img src="/img/user1.jpg" />
                         
                         </div>
                         </>
                    }
                        {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                        <div className="flex items-center gap-2">
                            <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.firstName} ${response?.authorDetails?.lastName}`}</h3>
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
    :
      <>
      <NodataImg />
      </>          
      }
    </>
   }
   
   
   </>
  )
}


                 