import './App.css';
import React from 'react';
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

function App() {
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
          <Route path="/faq" element={<FAQs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
