import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
  
      <nav className='border h-14 flex justify-center w-96 rounded-3xl bg-blue-600 mb-10'>
        <ul className='flex items-center gap-8'>
          <li> <Link href="/">Home</Link></li>
          <li> <Link href="/projects">Projects</Link></li>
          <li> <Link href="/about">About</Link></li>
          <li> <Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    

  )
}
