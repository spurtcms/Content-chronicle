"use client"

import Link from 'next/link'
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useParams } from 'next/navigation'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';
import HeaderSkeleton from '../../utilities/SkeletonLoader/HeaderSkeleton';
import ThemeSwitch from '@/utilities/ThemeSwitch';



function HeaderServerAction({postchannel}) {
    
    console.log(postchannel,"postchannelllll");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [skeleton,setSkeleton]=useState(false)
    const [loader,setLoader]=useState(false)

    const params = useParams()

    useEffect(()=>{
        if(postchannel&&postchannel.length!=0){
            setSkeleton(true)
        }
    },[])

    const handleClick=()=>{
        setLoader(true)
    }
    return (
        <>
      
        <Suspense fallback={null}/>
            <header className=" shadow-md shadow-black/860">
                <nav
                    className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-20 lg:py-6 h-[72px]"
                    aria-label="Global"
                >
                    <Link href="/"><img src="/img/blog-logo.svg" /></Link>
                    <div className="flex lg:hidden ml-auto">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="justify-start items-center hidden lg:flex lg:flex-0 w-full">

                        {skeleton?
                            <div className="flex lg:justify-center gap-6 w-11/12">
                                {postchannel.map((data,index)=>(
                                    <>{console.log(data,"datadatavvv")}
                                    {params?.slug==data.slugName?
                                    <Link
                                    href={`/post-channel/${data?.slugName}`}
                                    className="text-cyan-600 text-sm font-normal leading-4"
                                    onClick={handleClick}
                                    >
                                    {data.channelName}
                                    </Link>
                                    :<Link
                                    href={`/post-channel/${data?.slugName}`}
                                    className="text-black text-sm font-normal leading-4"
                                    onClick={handleClick}
                                    >
                                    {data.channelName}
                                    </Link>}
                                    
                                    </>
                                ))}
                       
                            </div>
                            :
                            <HeaderSkeleton/>}
                    </div>
                    <ThemeSwitch/>
                </nav>
                
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span >
                                <img className="h-8 w-40" src="/img/blog-logo.svg" alt="" /></span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                {/* skeleton */}
                                <div className="space-y-8 py-6 flex flex-col">
                                {postchannel?.map((data,index)=>(
                                <>
                                
                                {params?.slug==data.slugName?
                                <Link
                                href={`/post-channel/${data?.slugName}`}
                                className="text-cyan-600 text-sm font-normal leading-4"
                                >
                                {data.channelName}
                                </Link>
                                :<Link
                                href={`/post-channel/${data?.slugName}`}
                                className="text-black text-sm font-normal leading-4"
                                >
                                {data.channelName}
                                </Link>}
                                </>
                            ))}
                                   
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}

export default HeaderServerAction
