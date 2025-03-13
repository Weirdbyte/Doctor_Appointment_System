import React, { useEffect } from 'react';

import axios from 'axios';
import Layout from '../components/Layout';

const Homepage = () => {

  const getUserData = async()=>{
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/user/getUserData',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );     
      // console.log(res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getUserData();
  }, []);

  return (
    <Layout>
      <div>
        <h1>Welcome to Home Page</h1>
      </div>
    </Layout>
  );
}

export default Homepage