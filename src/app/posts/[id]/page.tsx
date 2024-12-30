// 'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';

const posts = [
  {
    id: "1",
    title: 'Mastering Node.js',
    description: 'Node.js is a powerful JavaScript runtime built on Chrome’s V8 engine for building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.', 
    date: '2024-12-27',
    image: '../images/Slide1.jpg',
  },
  {
    id: "2",
    title: "TypeScript",
    description: "TypeScript is a superset of JavaScript that adds optional static typing and other features",
    date: "2024-12-27",
    image: '../images/Slide2.jpg',
  },
  {
    id: "3",
    title: "React",
    description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    date: "2024-12-27",
    image: '../images/Slide4.jpg',
  },
  {
    id: "4",
    title: "Tailwid CSS",
    description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    date: "2024-12-27",
    image: '../images/Slide3.jpg',
  },
  {
    id: "5",
    title: "JavaScript",
    description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    date: "2024-12-27",
    image: "../images/Slide5.jpg",
  },
  {
    id: "6",
    title: "Python",
    description: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    date: "2024-12-27",
    image: "../images/Slide6.jpg",
  },
  {
    id: "7",
    title: "Blockchain",
    description: "A blockchain is a growing list of records, called blocks, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.",
    date: "2024-12-27",
    image: "../images/Slide6.jpg",
  },
  {
    id: "8",
    title: "Next.js",
    description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
    date: "2024-12-27",
    image: '../images/Slide8.jpg',
  },
  {
    id: "9",
    title: "MongoDB",
    description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    date: "2024-12-27",
    image: '../images/Slide9.jpg',
  },
];



export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className='mt-4 text-justify'>{para.trim()}</p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4'
        />
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}
