import React from 'react';
import home from './home.module.css';

const Home = () => (
  <div className="home">
    <h3 className={home.header3}>Welcome to Math Magicians</h3>
    <p className={home.paragraph}>
      Math Magicians is a webpage that is designed to provide users with a fun
      way to interact with online calculator. It also generates random quotes
      about Mathematics
    </p>
  </div>
);

export default Home;
