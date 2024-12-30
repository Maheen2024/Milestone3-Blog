'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import ContactPage from '@/app/contact/page';

export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) + '' +
        now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId)
  }, []);


  return (
    <header className='text-gray-400 body-font shadow-lg'>
      <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
        <div className='flex-1 text-black'>
          <span>{currentDateTime}</span>
        </div>
        <nav className='md:ml-auto flex flex-wrap items-center text-black justify-center'>
          <Link href={"/"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105'>Home</Link>
          <Link href={"/about"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105'>About</Link>
          <Link href={"/blog"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105'>Blog</Link>
          <Link href={"/contact"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105'>Contact</Link>
        </nav>
<Link href='https://github.com/Maheen2024'>
        <button className='inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300 '>
          GitHub
          <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          className='w-4 h-4 ml-1'
          viewBox='0 0 24 24'>

            <path d="M5 12h14M12 5l7 7-7 7" />

          </svg>
        </button></Link>








      </div>
    </header>

  )
}
