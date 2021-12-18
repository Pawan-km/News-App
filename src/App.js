import './App.css';
import React, { useState} from 'react'
import News from './News'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)


  const pageSize = 10

    return (
     
        <Router>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
          <Navbar />
          
          <Switch>
            <Route path="/" exact><News apiKey={apiKey} setProgress={setProgress}  key='general' pageSize={pageSize} category='general' country='in' /></Route>
            <Route path="/business" exact><News apiKey={apiKey} setProgress={setProgress}  key='business' pageSize={pageSize} category='business' country='in' /></Route>
            <Route path="/health" exact><News apiKey={apiKey} setProgress={setProgress}  key='health' pageSize={pageSize} category='health' country='in' /></Route>
            <Route path="/science" exact><News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key='science' category='science' country='in' /></Route>
            <Route path="/sports" exact><News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} category='sports' key='sports' country='in' /></Route>
            <Route path="/technology" exact><News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} category='technology' key='technology' country='in' /></Route>
          </Switch>
        </Router>
      
    )
  }

