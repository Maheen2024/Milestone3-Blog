import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-20'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Maheen Baig : Navigating the secrets of Techonology in Tech Chronical Blog !
        </h2>

        <p className='text-center m-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Exploring the Latest Advancements in Technology

          Stay updated on the newest trends, innovations, and breakthroughs in the world of technology. From artificial intelligence and cybersecurity to gadgets and software, this blog delves into the exciting and ever-evolving tech landscape
        </p>


        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'> Exploring Our Categories </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "Next.js",
              "MongoDB",
              "Blockchain",

            ].map((category, index) => (
              <div key={index}
                className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-10 cursor-pointer flex items-center justify-center text-neutral-600'>
                <p className='text-center text-lg font-semibold'> {category} </p>
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className='text-center md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
          Dive into our diverse range of categories, where you will discover a wealth of information on the latest trends, innovations, and breakthroughs in the world of technology. Whether you are interested in artificial intelligence, cybersecurity, gadgets, or software, you will find a wealth of resources to help you stay informed and up-to-date. Explore our categories today and start your journey to becoming a tech expert!
        </p>
      </section>
    </div>
  );
}
