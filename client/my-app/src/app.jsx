import React from 'react';
//import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,Route,
    Routes
  } from "react-router-dom";
  //import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/home';
import Properties from './routes/properties';
import Reviews from './routes/reviews';
import Propertydetail from './routes/propertydetail';
//import { PropertyContext } from './context/propertycontext';
  

const App = () => {
    return (
      
<div>
        <Router>
      <Routes>
          <Route path="/" element={<Home />} />
            <Route  path="properties" element= {<Properties />}/>
            <Route  path="reviews" element={<Reviews />}/>
            <Route  path="/properties/:id" element= {<Propertydetail />}/>
      </Routes>
    </Router>
         
    </div>
    
    
    );
};

export default App;