import React from 'react'
import Image from 'next/image'

function ImageComponent({src,w,h,alt,className}) {
    const hadleLoad=({src})=>{
      console.log({src},"bybybyby");
    return src
    }
  return (
    <>
    <Image
                                loader={hadleLoad}
                                src={src}
                                alt={alt}
                                width={w}
                                height={h}
                                className={className}
                              />
    </>
  )
}

export default ImageComponent

