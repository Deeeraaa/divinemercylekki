import { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';

// import Article from './components/article/Article'
// import Brand from './components/brand/Brand'
// import Cta from './components/cta/Cta'
// import Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar' 

import { Article, Brand, Cta, Feature, Navbar, Program  } from './components/index'
import { Footer, Blog, Header, WhatGPT3, Possibilities } from './containers'
 


function App() { 
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3500)
  }, [])

  return (
    <div className="App"> 
      {loading ?
        <div className="loader">
            <ClimbingBoxLoader classame='loader' color={'#366CD7'} loading={loading} size={30} />
        </div>
        
        : 
        <div>
         <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Article/>
          <Brand />
          <WhatGPT3 />
          <Feature />
          <Program />
          <Possibilities />
          <Cta />
          <Blog />
              <Footer />
            </div>    
      
        
        }
      
    </div>
  );
}

export default App;
