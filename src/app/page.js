"use client"

import Image from 'next/image'
import { Source_Code_Pro } from '@next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Hi! I&apos;m Nick.</h1>
          <p>Where do you want to go first?</p>
        </div>
        <div className={`flex flex-col gap-4 md:flex-row`}>
          <Link href="/about" className="flex-grow">
            <div className='bg-zinc-700 border-2 border-zinc-600 p-4 rounded-lg hover:shadow-xl text-center'>
              <p className='font-bold text-2xl'>About Me</p>
            </div>
          </Link>
          <Link href="/projects" className="flex-grow">
            <div className='bg-zinc-700 border-2 border-zinc-600 p-4 rounded-lg hover:shadow-xl text-center'>
              <p className='font-bold text-2xl'>Projects</p>
            </div>
          </Link>
          <Link href="/contact" className="flex-grow">
            <div className='bg-zinc-700 border-2 border-zinc-600 p-4 rounded-lg hover:shadow-xl text-center'>
              <p className='font-bold text-2xl'>Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
