import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-200  text-gray-50 min-h-screen flex flex-col">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-center my-8 text-red-600 animate-color-change">About Us</h1>
        <p className="text-lg mt-4 text-gray-800">
        Discover the story behind our tech blog, where passion meets innovation and insight
        </p>
      </header>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-red-600">Who We Are</h2>
            <p className="text-gray-800">
              At <span className="font-bold text-lama">Blog-site</span>, We are a team of tech enthusiasts dedicated to sharing insightful news, reviews, and analysis on the latest advancements in technology.
               With a passion for innovation and a keen eye for detail, we strive to deliver high-quality content that informs, educates, and inspires our readers.
            </p>
            {/* <p className="text-gray-600">
              Our goal is to build digital ecosystems where businesses can thrive,
              connect, and innovate. With a focus on simplicity and functionality, we
              craft solutions that leave a lasting impact.
            </p> */}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br rounded-lg shadow-lg blur-lg opacity-70"></div>
            {/* <img
              src="/m3.png"
              alt="Our Team"
              height={200}
              width={200}
              className="relative z-10 rounded-lg shadow-lg"
            /> */}
          </div>
        </div>

        <div className="bg-gray-100 text-gray-800 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  Always evolving to stay ahead of the curve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800">Integrity</h3>
                <p className="mt-2 text-gray-600">
                  Trust and transparency are at the heart of everything we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800">Excellence</h3>
                <p className="mt-2 text-gray-600">
                  Delivering outstanding results, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
