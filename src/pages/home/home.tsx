import React, { FC } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Gallery from '../../components/gallery/gallery';
import TovarGallery from '../../components/tovarGallety/tovarGallety';
import Contacts from '../../components/contacts/contacts';

type HomeProps = {};

const Home: FC<HomeProps> = props => {
  return (
    <div
      style={{
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <Hero />
      <Gallery />
      <TovarGallery />
      <About />
      <Contacts />
    </div>
  );
};

export default Home;
