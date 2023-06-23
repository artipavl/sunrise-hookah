import React, { FC } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';

type HomeProps = {};

const Home: FC<HomeProps> = props => {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
