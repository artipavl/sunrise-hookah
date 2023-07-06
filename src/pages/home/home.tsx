import React, { FC } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Gallery from '../../components/gallery/gallery';
import TovarGallery from '../../components/tovarGallety/tovarGallety';
import Contacts from '../../components/contacts/contacts';
import Heder from '../../components/header/heder';
import Footer from '../../components/footer/footer';
import SocialLinks from '../../components/socialLinks/socialLinks';

type HomeProps = {};

const Home: FC<HomeProps> = props => {
  return (
    <div
      style={{
        position: 'relative',
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <Heder />
      <Hero />
      <Gallery />
      <TovarGallery />
      <About />
      <Contacts />
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default Home;
