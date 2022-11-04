import axios from 'axios';
import React from 'react'  
import { useEffect } from 'react';

const Home = () => {
  const getDepartments = async (str) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/blog/posts/`, { 
      }); 
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDepartments()
  }, [ ])
  
  return (
    <div>
      Home  
    </div>
  )
}

export default Home