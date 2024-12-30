import React from 'react';
import BlogCard from '../components/BlogCard';
// import id from '@/app/posts/[id]/Page';
// import { title } from 'process';


export default function Mega() {
  const posts = [
    {
      id: "1",
      title: 'Mastering Node.js',
      description: 'Node.js is a powerful JavaScript runtime built on Chromes V8 engine. It uses an event-driven, non-blocking I/O model for lightweight and efficient performance. Ideal for data-intensive real-time applications that run across distributed devices',
      date: '2024-12-27',
      imageUrl: '../images/Slide1.jpg',
    },
    {
      id: "2",
      title: "TypeScript",
      description: "TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development experience and catch errors early  ",
      date: "2024-12-27",
      imageUrl: '../images/Slide2.jpg',
    },
    {
      id: "3",
      title: "React",
      description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
      date: "2024-12-27",
      imageUrl: '../images/Slide4.jpg',
    },
    {
      id: "4",
      title: "Tailwid CSS",
      description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
      date: "2024-12-27",
      imageUrl: '../images/Slide3.jpg',
    },
    {
      id: "5",
      title: "JavaScript",
      description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      date: "2024-12-27",
      imageUrl: "../images/Slide5.jpg",
    },
    {
      id: "6",
      title: "Python",
      description: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
      date: "2024-12-27",
      imageUrl: "../images/Slide6.jpg",
    },
    {
      id: "7",
      title: "Blockchain",
      description: "A blockchain is a growing list of records, called blocks, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.",
      date: "2024-12-27",
      imageUrl: '../images/Slide7.jpg',
    },
    {
      id: "8",
      title: "Next.js",
      description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      date: "2024-12-27",
      imageUrl: '../images/Slide8.jpg',
    },
    {
      id: "9",
      title: "MongoDB",
      description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      date: "2024-12-27",
      imageUrl: '../images/Slide9.jpg',
    },
  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-semibold text-center my-8 text-red-600 animate-color-change'> Exploring the world of AI and Teconology</h1>

      <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((posts, index) => (
          <div className='fade-in' key={posts.id}>
            <div className='blog-card'>
             <BlogCard post={posts} isDarkBackground ={index % 2 === 0}/>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
