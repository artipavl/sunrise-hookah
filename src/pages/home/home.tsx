import React, { FC } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Gallery from '../../components/gallery/gallery';
import TovarGallery from '../../components/tovarGallety/tovarGallety';

type HomeProps = {};

const Home: FC<HomeProps> = props => {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      <Gallery />
      <TovarGallery />
      <About />
    </div>
  );
};

export default Home;
