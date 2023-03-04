import React from 'react';
import CommentCard from '../components/cards/CommentCard';
import CommentForm from '../components/CommentForm';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />
      <CommentCard />
      <CommentForm />
    </>
  );
}

export default Home;
