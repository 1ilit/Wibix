import './App.css';
import React, { Component } from 'react';
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
class App extends Component{

  state={}
  // useEffect(()=>{
  //   var vals=localStorage.getItem('token');
  //   setData(JSON.parse(vals));
  //   console.log(data);
  // }, [])
  componentDidMount(){
    var vals=localStorage.getItem('token');
    this.setState({data: JSON.parse(vals)});
    console.log(this.state.data);
  }
    
render(){
    return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={this.state.data}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resources" element={<Resources data={this.state.data}/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forum" element={<Forum data={this.state.data}/>}/>
          <Route path="/about" element={<About data={this.state.data}/>}/>
          <Route path="forum/:postId" element={<ViewPost data={this.state.data}/>}/>
          <Route path="/askQuestion" element={<AskQuestion data={this.state.data}/>}/>
          <Route path="/faq" element={<FAQs data={this.state.data}/>}/>
          <Route path="/resources/schools/:schoolId" element={<ViewSchool data={this.state.data}/>}/>
          <Route path="/schoolNotFound" element={<SchoolNotFound data={this.state.data}/>}/>
          <Route path="/resources/schools/courses/:courseId" element={<ViewCourse data={this.state.data}/>}/>
          <Route path="/courseNotFound" element={<CourseNotFound data={this.state.data}/>}/>
          <Route path="/postRes" element={<PostResource data={this.state.data}/>}/>
          <Route path="/resources/schools/courses/resources/:resourceId" element={<ViewResource data={this.state.data}/>}/>
          <Route path="/resNotFound" element={<ResNotFound data={this.state.data}/>}/>
          <Route path="/profile" element={<Profile data={this.state.data}/>}/>
        </Routes>
      </Router>
    </>
    );
    }
}

export default App;
