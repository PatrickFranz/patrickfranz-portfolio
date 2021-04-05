import React from 'react';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Seo title="Home Page" />
    <About />
    {/* <Portfolio /> */}
    {/* <Skills /> */}
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
