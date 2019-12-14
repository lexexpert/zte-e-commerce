import React from 'react';
import Directory from "../../components/Directory/Directory";
import './homePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <Directory/>
    </div>
  );
}

export default HomePage;
