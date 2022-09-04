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
import Profile from './pages/Profile';
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
          <Route path="/" element={<Home data={data}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resources" element={<Resources data={data}/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forum" element={<Forum data={data}/>}/>
          <Route path="/about" element={<About data={data}/>}/>
          <Route path="forum/:postId" element={<ViewPost data={data}/>}/>
          <Route path="/askQuestion" element={<AskQuestion data={data}/>}/>
          <Route path="/faq" element={<FAQs data={data}/>}/>
          <Route path="/resources/schools/:schoolId" element={<ViewSchool data={data}/>}/>
          <Route path="/schoolNotFound" element={<SchoolNotFound data={data}/>}/>
          <Route path="/resources/schools/courses/:courseId" element={<ViewCourse data={data}/>}/>
          <Route path="/courseNotFound" element={<CourseNotFound data={data}/>}/>
          <Route path="/postRes" element={<PostResource data={data}/>}/>
          <Route path="/resources/schools/courses/resources/:resourceId" element={<ViewResource data={data}/>}/>
          <Route path="/resNotFound" element={<ResNotFound data={data}/>}/>
          <Route path="/profile" element={<Profile data={data}/>}/>
        </Routes>
      </Router>
    </>
    );
  
}

export default App;
