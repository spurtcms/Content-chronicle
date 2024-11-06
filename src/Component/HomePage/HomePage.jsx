"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import ImageComponent from '../ImageComponent';
import moment from 'moment';
import HomePageSkeleton from '../../utilities/SkeletonLoader/HomePageSkeleton';
import { imageUrl } from '@/utilities/ImagePath';


function HomePageAction({postchannel,Listdata}) {

  console.log(Listdata,"Listdataaaa");
  console.log(postchannel,"postchannellll");

  const [skeleton,setSkeleton]=useState(true)

    useEffect(()=>{
    if(Listdata&&Listdata.length!=0){
      setSkeleton(false)
    }
    },[])

let IntialData=[]



Listdata?.map((result,index)=>{
if(IntialData.length==0){
let namefind=postchannel.find((s)=>s.id==result.channelId)
result.channelName=namefind.channelName
    IntialData.push(result)
}
else{
    let filterData=IntialData.some((s)=>s.channelId===result.channelId)
    console.log(filterData,"filterDataaaaa");
        if(filterData){
          
        }
        else{
            let namefind=postchannel.find((s)=>s.id==result.channelId)
            if(namefind){
              result.channelName=namefind?.channelName
              IntialData.push(result)
            }
            
        }  

}
})



  const groupData = Listdata?.reduce((acc, items) => {
      if (!acc[items.channelId]) {
        acc[items.channelId] = [items];
      } else {
        acc[items.channelId].push(items);
      }
      return acc;
    },
    {}
  );

  const groupItem=Listdata?.reduce((person,item)=>{
    (person[item.channelId]=person[item.channelId]||[]).push(item);
    return person;
  },{})


  let Channeldata = [];
  for (const key in groupData) {
    Channeldata.push({ detail: key, values: groupData[key] });
  }

  let featuredata = [];

  Channeldata.map((data) => {
    data.entrydata = "";
    data.values.map((res) => {
      if (res.featuredEntry == 1) {
        data.entrydata = res;
      }
    });
  });

  featuredata.push(Channeldata);

  console.log(IntialData,'IntialData234243',featuredata);
  return (
   <>
   {/* <LoaderBar Listdata={Listdata}/> */}

  
      {skeleton?
      <>
      <HomePageSkeleton/>
      </>
      :
      <main className=" min-h-screen p-4 md:p-8 lg:p-20  max-w-screen-2xl m-auto">
        
      
        <div className="grid grid-cols-1 md:grid-cols-8fr lg:grid-cols-1fr gap-8 lg:gap-12 mb-6">
            {/* map call */}
          {IntialData.map((response,index)=>(<>{console.log(response,"responseeee")}
          {index == 0 &&
          <>{console.log(response?.slug,"sluggggg")}
          <div className="group">
            <Link href={`/posts/${response?.slug}`}>
                              
            <ImageComponent src={`${response?.coverImage}`} w={600} h={600} alt={"Picture of the author"} className={"w-chang"}/>
              {/* <img src="/img/blog-img5.png" className="w-full" /> */}
            </Link>
            <h5 className="text-activeblue-500 text-sm font-normal leading-4 mb-1 mt-6">{response?.channelName}</h5>
            <Link href={`/posts/${response?.slug}`} className="group-hover:text-activeblue-500  group-hover:underline text-black text-4xl font-medium leading-10 line-clamp">
              {response?.title}
            </Link>
            <div className="mb-4 mt-2 text-gray-500 font-light text-base leading-5 line-clamp-para desc"
            dangerouslySetInnerHTML={{__html: response?.description.replaceAll("<br>"," "),}}/>
                
            <div className="flex items-center gap-3">
                  {/* <div className='flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>  */}
                {response?.authorDetails?.profileImagePath
                ?
                (
                <ImageComponent src={`${imageUrl}${response?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                )
              
                :
                <>
                <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                {/* {`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`.charAt(0)} */}
                <img src="/img/user1.jpg" />
                </div>
                </>
            }

              {/* </div> */}
              <div className="flex items-center gap-2">
              
                <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.firstName} ${response?.authorDetails?.lastName}`}</h3>
                <p className=" text-gray-500 text-xs font-light">{moment(response?.createdOn).format(
                                      "MMM DD, YYYY"
                                    )}</p>
              </div>
            </div>
          </div>
          </>
          }
          </>
          ))}
          
          {/* firs */}
        
          <div>
          {IntialData.map((response,index)=>(
            <>{console.log(response,"response2")}
            {index>0&&index<4&&

            <div className="flex gap-6 items-start pb-6 border-b border-gray-200 mb-6 lg:flex-row flex-col group">
          
            <>
              <Link href={`/posts/${response?.slug}`} className="md:w-auto w-full ">
                {/* <img src={response?.coverImage} className="w-full h-40 min-w-0 max-w-40 md:max-w-0 md:m-0  md:min-w-40" /> */}
                <ImageComponent src={`${response?.coverImage}`} w={160} h={160} alt={"Picture of the author"} className={"w-full h-40 min-w-0 max-w-40 md:max-w-0 md:m-0  md:min-w-40"}/>
              </Link>
              <div>
                <h5 className="text-activeblue-500 text-sm font-normal leading-4 mb-1">{response?.channelName}</h5>
                <Link href={`/posts/${response?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-2xl font-medium leading-7 line-clamp-2">
                
                {response?.title}
                </Link>
                  <div className="w-60 mb-4 mt-2 text-gray-500 font-light text-base leading-5 line-clamp-3 desc"
            dangerouslySetInnerHTML={{
                                __html: response?.description.replaceAll("<br>"," "),
                              }}/>
               <div className="flex items-center gap-3">
                  {/* <div className='flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>  */}
                {response?.authorDetails?.profileImagePath
                ?
                (
                <ImageComponent src={`${imageUrl}${response?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                )
              
                :
                <>
                <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                {/* {`${response?.authorDetails?.FirstName} ${response?.authorDetails?.LastName}`.charAt(0)} */}
                <img src="/img/user1.jpg" />
                </div>
                </>
            }

              {/* </div> */}
              <div className="flex items-center gap-2">
              
                <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.firstName} ${response?.authorDetails?.lastName}`}</h3>
                <p className=" text-gray-500 text-xs font-light">{moment(response?.createdOn).format(
                                      "MMM DD, YYYY"
                                    )}</p>
              </div>
            </div>
              </div>
              </>
            </div>
            }

            </> 
            ))} 
            
          </div>
          
          {/* sec */}
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-6 border-b border-gray-200 mb-4 ">
        {IntialData.map((response,index)=>(<>{console.log(response,"response3")}
        {index>3&&
        <>
          <div className="pt-6 border-t border-gray-200 group">
            <Link href={`/posts/${response?.slug}`}>
            <ImageComponent src={`${response?.coverImage}`} w={600} h={600} alt={"Picture of the author"} className={"img-height"}/>
              {/* <img src="/img/blog-img5.png" /> */}
            </Link>
            <h5 className="text-activeblue-500 text-sm font-normal leading-4 mb-1 mt-6">{response?.channelName}</h5>
            <Link href={`/posts/${response?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-4xl font-medium leading-10 line-clamp-1">
            {response?.title}
            </Link>
            <div className="mb-4 mt-2 text-gray-500 font-light text-base leading-5 line-clamp-6 desc"
            dangerouslySetInnerHTML={{
                                __html: response?.description.replaceAll("<br>"," "),
                              }}/>
            {/* <p className="mb-4 mt-2 text-gray-500 font-light text-base leading-5">Say goodbye to constant mouse clicking and hello to seamless navigation with GitHub shortcuts.</p> */}
            <div className="flex items-center gap-3">
            {response?.authorDetails?.profileImagePath
                ?
                (
                <ImageComponent src={`${imageUrl}${response?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                )
              
                :
                <>
                <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                {/* {`${response?.authorDetails?.FirstName}`.charAt(0)} */}
                {/* {`${response?.authorDetails?.LastName}`.charAt(0)} */}
                <img src="/img/user1.jpg" />
                </div>
                </>
            }
              {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
              <div className="flex items-center gap-2">
              <h3 className="text-black text-sm font-normal">{`${response?.authorDetails?.firstName} ${response?.authorDetails?.lastName}`}</h3>
                <p className=" text-gray-500 text-xs font-light">{moment(response?.createdOn).format(
                                      "MMM DD, YYYY"
                                    )}</p>
              </div>
            </div>
          </div>
          </>
          }
          </>))}
          
        </div>
        
        
        {/* third */}
        <div>
          {featuredata&&featuredata.map((result)=>(
            <>
            {result&&result.map((datas,index)=>(
              <>{console.log(datas,"resulthhhhh")}
            
          <h4 className="text-black font-medium text-2xl leading-8 mb-4 px-10">
            {datas?.values?.[0]?.categories?.[0]?.at(-1)?.categoryName}
          </h4>
             
              <div className={datas.values.length>1
              ?"grid grid-cols-1 md:grid-cols-8fr lg:grid-cols-2fr gap-8 lg:gap-12 pb-6 border-0 md:border-b border-gray-200 mb-4"
              :"grid grid-cols-1 md:grid-cols-8fr lg:grid-cols-1 gap-8 lg:gap-12 p-10 border-0 md:border-b border-gray-200 mb-4"}>
                   
                   
                      <div className="group">
                    
                      <Link href={`/posts/${datas?.values?.[0]?.slug}`} className="block mb-6">
                        <ImageComponent src={`${datas?.values?.[0]?.coverImage}`} w={500} h={500} alt={"Picture of the author"} className={datas.values.length>1 ?"h1-image" :"w-full h-image"}/>
                        {/* <img src="/img/blog-img5.png" className="w-full" /> */}
                      </Link>
                      <Link href={`/posts/${datas?.values?.[0]?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-4xl font-medium leading-10">
                        {datas?.values?.[0]?.title}
                      </Link>
                      <div className="mb-4 mt-2 text-gray-500 font-light text-base leading-5 line-clamp-para desc"
                                      dangerouslySetInnerHTML={{
                                        __html: datas?.values?.[0]?.description.replaceAll("<br>"," "),
                                      }}
                      ></div>
                      <div className="flex items-center gap-3">
                          {datas?.values?.[0]?.authorDetails?.profileImagePath
                              ?
                              (
                              <ImageComponent src={`${imageUrl}${datas?.values?.[0]?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
                              )
                            
                              :
                              <>
                              <div className='flex text-black items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300'>
                              {/* {`${datas?.values?.[0]?.FirstName} ${datas?.values?.[0]?.LastName}`.charAt(0)} */}
                               <img src="/img/user1.jpg" />
                              </div>
                              </>
                          }
                        {/* <img src="/img/blog-img1.png" className="w-10 h-10 rounded-full" /> */}
                        <div className="flex items-center gap-2">
                          <h3 className="text-black text-sm font-normal">
                          {`${datas?.values?.[0]?.authorDetails?.firstName}${datas?.values?.[0]?.authorDetails?.lastName}`}
                          </h3>
                          <p className=" text-gray-500 text-xs font-light">
                          {moment(datas?.values?.[0]?.createdOn).format(
                                          "MMM DD, YYYY"
                           )}
                            </p>
                        </div>
                      </div>
                      </div>                
               {console.log(datas?.values,"valueeee")}
                      {datas.values.length>1&&
                      
                      <div>
                        
                        {/* {datas.values.find((res)=>{return res.featuredEntry!=1})? */}
                        <>
                                {datas.values.map((response, ind) =>
                                  ind!=0&& ind <= 3&&(
                                    <>{console.log(response,"responsepppp")}
                                      <div className="pb-6 mb-6 border-b border-gray-200 group">
                                        <Link href={`/posts/${response?.slug}`} className="group-hover:text-activeblue-500 group-hover:underline text-black text-2xl font-medium leading-7">
                                          {response?.title}
                                        </Link>
                                        <div className="mb-4 mt-2 text-gray-500 font-light text-base leading-5 line-clamp-des desc"
                                        dangerouslySetInnerHTML={{
                                          __html: response.description.replaceAll("<br>"," "),
                                        }}
                                        >
                                          </div>
                                        <div className="flex items-center gap-3">
                                        {response?.authorDetails?.profileImagePath
                                                  ?
                                                  (
                                                  <ImageComponent src={`${imageUrl}${response?.authorDetails?.profileImagePath}`} w={40} h={40} alt={"Picture of the author"} className={"rounded-full"}/>   
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
                                            <h3 className="text-black text-sm font-normal">
                                            {`${response?.authorDetails?.firstName} ${response?.authorDetails?.lastName}`}
                                              </h3>
                                            <p className=" text-gray-500 text-xs font-light">
                                            {moment(response?.createdOn).format(
                                            "MMM DD, YYYY"
                                          )}
                                              </p>
                                          </div>
                                        </div>
                                      </div>
                                    </>))}
                        </>
                          
                        
                                      
                      </div>
                      }
              </div>
              </>
            ))}
            </>
          ))}
        
        </div>
        
      </main>
      }
       
      
   </>
  )
}

export default HomePageAction
