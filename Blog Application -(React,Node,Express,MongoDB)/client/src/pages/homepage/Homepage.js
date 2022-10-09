import React, { useEffect,useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Homepage.css";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const[posts,setPosts]=useState([]);
  const {search}=useLocation();
  useEffect(()=>{
    fetch('http://localhost:5000/api/posts'+search)
    .then(res=>res.json())
    .then(data=>{
      setPosts(data);
      console.log(data);
    })
  },[search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  );
};

export default Homepage;
