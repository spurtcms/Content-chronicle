
import React from 'react'

export default function HeaderSkeleton() {
  return (
    <>
           
                    <div role="status" className="flex lg:justify-center gap-6 w-11/12 animate-pulse">
                        {[1,2,3,4,5,6,7,8,9,10].map((ddd)=>(
                            <>
                             <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </>
                        ))}
                    </div>
             
    </>
  )
}
