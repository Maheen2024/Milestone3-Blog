import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Mastering Node.js',
    description:
      'Node.js is a powerful JavaScript runtime built on Chrome’s V8 engine for building fast and scalable network applications.\nNode.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.',
    date: '2024-12-27',
    image: '/images/Slide1.jpg',
  },
  {
    id: '2',
    title: 'TypeScript',
    description:
      'TypeScript is a superset of JavaScript that adds optional static typing and other features.',
    date: '2024-12-27',
    image: '/images/Slide2.jpg',
  },
  // Add the rest of your posts here
];

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// The page component
export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound(); // Automatically returns a 404 page if the post is not found
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className='w-full h-auto rounded-md mt-4'
        />
      )}

      <div className='mt-6 text-lg text-slate-700'>{renderParagraphs(post.description)}</div>

      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}

