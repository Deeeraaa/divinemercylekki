import './App.css';

// import Article from './components/article/Article'
// import Brand from './components/brand/Brand'
// import Cta from './components/cta/Cta'
// import Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar' 

import { Article, Brand, Cta, Feature, Navbar, Program  } from './components/index'
import { Footer, Blog, Header, WhatGPT3, Possibilities } from './containers'
 


function App() { 
  return (
    <div className="App"> 
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
  );
}

export default App;
