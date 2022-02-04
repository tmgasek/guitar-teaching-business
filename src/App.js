import React from 'react';
import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Services,
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div>
    <Navbar />

    <Header />
    <AboutUs />
    <Services />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
