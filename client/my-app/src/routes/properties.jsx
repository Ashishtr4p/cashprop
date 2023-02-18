import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/footer";
import '../app.css';
import home2 from "./img/home3.jpeg";
import {useNavigate} from 'react-router-dom';
import '../routes/style.css';
import '../routes/main.js';


function Properties() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const pageData = data.slice(startIndex, endIndex);
const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
const handlepropertyselect = (id) => {
  navigate(`/properties/${id}`);
}
  return (
    <><div >
      <Header />
      <div class=" body container" >
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-box-d">
              <h1 class="title-d ">Our Amazing Properties</h1>
              <span>Find the houses and apartments in your favorite location</span>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Properties
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

    <br /> 
    <br />
      <div className=" container ">
      <div className="row ">
      <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2  fixedaffix">
          <div>filter</div>
    </div>
    <div class="col-sm-6 col-md-10 col-lg-10 col-xl-10">
     
    
      <div className="row mb-2 ">
  {pageData.map((item, index) => (
    <div key={index} class="col-md-4">
    <div class="card-box-a card-shadow">
      <div class="img-box-a">
        <img src={home2} alt="" class="img-a img-fluid " style={{height: '400px', width: '400px',borderRadius:'10% 10% 0% 0%'}}/>
      </div>
      <div class="card-overlay">
        <div class="card-overlay-a-content">
          <div class="card-header-a">
            <h2 class="card-title-a">
              <a href={`/properties/${item.id}`}>{item.name}
                <br /> {item.location}</a>
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">CashBack | {item.cashback}%</span>
            </div>
            <p class="link-a" onClick={() => handlepropertyselect(item.id)} >Click here to view
              <span class="bi bi-chevron-right"></span>
            </p>
          </div>
          <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
              <li>
                <h4 class="card-info-title">bhk</h4>
                <span>{item.bhk}
                </span>
              </li>
              <li>
                <h4 class="card-info-title">Price</h4>
                <span>Rs.{item.price} Lakhs
                </span>
              </li>
              <li>
                <h4 class="card-info-title">Status</h4>
                <span><b>{item.on_sale ? 'On Sale' : 'Sold'}</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </div>
    
  ))}  
</div>
<div class="row">
          <div class="col-sm-12">
            <nav class="pagination-a">
              <ul class="pagination justify-content-center" >
                <li class="page-item disabled" >
                  <a class="page-link" href="# " tabindex="-1">
                    <span class="bi bi-chevron-left"></span>
                  </a>
                </li>
                <li class="page-item" style={{padding:'10px'}}>
                <button type="button" class="btn btn-secondary"style={{backgroundColor:'orange',borderColor:'orange'}} onClick={() =>currentPage<1? alert("No Page Behind") : setCurrentPage(currentPage - 1)}>&laquo; Previous</button>

                </li>
                <li class="page-item active" style={{padding:'10px'}}>
                <button type="button" class="btn btn-primary" onClick={() => setCurrentPage(currentPage + 1)}>Next &raquo;</button>

                </li>
                <li class="page-item next">
                  <a class="page-link" href="# ">
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>



     
    </div>
  </div>
      </div>
      <div><Footer /></div>
    </div></>
  );
};

export default Properties;