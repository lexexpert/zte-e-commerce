import React from 'react';
import Directory from "../../components/Directory/Directory";
import './homePage.scss';
import {Link} from "react-router-dom";

const HomePage = () => (
  <div className='homepage'>
    <Link to={'/'}>Home</Link>
    <h1>Welcome to my Homepage</h1>
   <Directory/>
  </div>
);

export default HomePage;