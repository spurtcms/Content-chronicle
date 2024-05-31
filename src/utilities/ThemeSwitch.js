'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {resolvedTheme === 'dark' && (
        <Image
          width={20}
          height={20}
          onClick={() => setTheme('light')}
          className='cursor-pointer'
          src="/img/light.svg"
          alt='Theme img'
        />
      )}
      {resolvedTheme === 'light' && (
        <Image
          width={20}
          height={20}
          onClick={() => setTheme('dark')}
          className='cursor-pointer'
          src="/img/dark.svg"
          alt='Theme img'
        />
      )}
      
    </>
  )
}