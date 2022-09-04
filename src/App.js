import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Signup from './pages/Signup';
import About from './pages/About';
import Forum from './pages/Forum';
import ViewPost from './pages/ViewPost';
import AskQuestion from './pages/AskQuestion';
import FAQs from './pages/FAQs';
import ViewSchool from './pages/ViewSchool';
import SchoolNotFound from './pages/SchoolNotFound';
import ViewCourse from './pages/ViewCourse' 
import CourseNotFound from './pages/CourseNotFound';
import PostResource from './pages/PostResource';
import ViewResource from './pages/ViewResource';
import ResNotFound from './pages/ResNotFound'
// import axios from "axios"
// import {urlAccount} from "./endpoints"
const App =()=>{

  const [data, setData]=useState({});
  useEffect(()=>{
    var vals=localStorage.getItem('token');
    setData(JSON.parse(vals));
    console.log(data);
  }, [data])
    

    return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="forum/:postId" element={<ViewPost/>}/>
          <Route path="/askQuestion" element={<AskQuestion/>}/>
          <Route path="/faq" element={<FAQs data={data}/>}/>
          <Route path="/resources/schools/:schoolId" element={<ViewSchool/>}/>
          <Route path="/schoolNotFound" element={<SchoolNotFound/>}/>
          <Route path="/resources/schools/courses/:courseId" element={<ViewCourse/>}/>
          <Route path="/courseNotFound" element={<CourseNotFound/>}/>
          <Route path="/postRes" element={<PostResource/>}/>
          <Route path="/resources/schools/courses/resources/:resourceId" element={<ViewResource/>}/>
          <Route path="/resNotFound" element={<ResNotFound/>}/>
        </Routes>
      </Router>
    </>
    );
  
}

export default App;
