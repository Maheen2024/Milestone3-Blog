import React from 'react'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>


        <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-gray-700' src="../images/author.jpg" alt="Author Image" />

        <div>
          <h3 className='text-xl font-bold'> Maheen Baig</h3>
          <p className='text-slate-500'> Frontend Developer</p>
        </div>
      </div>

    <p className='mt-4 text-black leading-relaxed'>
      Maheen Baig is an frontend web developer
    </p>

    <div className='mt-4  flex space-x-3'>
     <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
      LinkedIn
     </a>

     <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
      Twitter
     </a>

     <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
      Facebook
     </a>
    </div>
    </div>
  )
}
