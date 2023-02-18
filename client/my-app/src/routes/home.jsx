import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/footer";
import '../app.css';
import home1 from "./img/home1.jpeg";
import home2 from "./img/home2.jpeg";
import home3 from "./img/home3.jpeg";
import home4 from "./img/home4.jpeg";
import home5 from "./img/home5.jpeg";
function Home() {

  const [data, setData] = useState([]);
  const [currentPage] = useState(0);
  const itemsPerPage = 6;
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const pageData = data.slice(startIndex, endIndex);
const Navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
const handlepropertyselect = (id) => {
  Navigate(`/properties/${id}`);
}
  return (
    <><div>
      <div><Header /></div>
      
      <div class="body1 ">
      <div class="row g-0" >
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{paddingTop: '150px ',backgroundColor: '#EFF2F9',paddingLeft:'80px',paddingRight:'80px',paddingInline: '5% 10%'
}}>
        <div className='jumbotron' >
        <p class="lead">
        <button type="button" class="btn btn-lg btn-primary" disabled style={{backgroundColor: 'Blue',text:"bold",borderRadius:'15px 50px'}}>India's First</button>
        </p> 
        <h1 class="display-4" style={{fontfamily: 'Arial, sans-serif',fontweight: '800'}}><strong>Cashback on Property Buying Platform </strong></h1>
        <p class="lead">Get 0.75% to 2% cashback on your property purchase from our partner developers</p>

        <p class="lead">
        <a href="/properties" class="btn btn-primary btn-lg active" role="button"  style={{backgroundColor: 'orange',borderColor: 'orange',borderRadius:'15px 50px'}}>Find Property</a>
  </p>        </div>
        
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button " data-bs-target="#demo" data-bs-slide-to="0" class="active" ></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={home1} alt="Los Angeles" class="d-block" style={{height: '637px', width: '100%'}}/>
  </div>
  <div class="carousel-item">
    <img src={home2} alt="Chicago" class="d-block" style={{height: '637px', width: '100%'}}/>
  </div>
  <div class="carousel-item">
    <img src={home3} alt="New York" class="d-block" style={{height: '637px', width: '100%'}}/>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" >
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>


    </div>
    
  </div>


  
      </div>
{/* body */}
<div className='container'>
<section class="section-services section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap  justify-content-between">
              <div class="title-box  "style={{fontfamily: 'Arial, sans-serif',textAlign:'center'}}>
              <h1 class="display-4" ><strong>How it works </strong></h1>
        <p class="lead">CashProp is a real estate affiliate buying platform which helps you get upto 2% cashback <br/>on your property purchase through three simple steps</p>

              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card-box-c foo" style={{border: '2px solid #A9B6D3',borderRadius: '15px',padding:'30px',paddingTop:'50px',paddingBottom:'50px'}}>
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span ><i class="fa-sharp fa fa-house"></i></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c"> Find property</h2>
                </div>
              </div>
              <div class="card-body-c align-self-center">
                <p class="content-c" style={{textAlign:'center'}}>
                Find the property form our partner developers on our site and check the cashback & eligibility process
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-box-c foo" style={{border: '2px solid #A9B6D3',borderRadius: '15px',padding:'30px',paddingTop:'50px',paddingBottom:'50px'}}>
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span ><i class="fa-solid fa-book"></i></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">Initiate Process</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c" style={{textAlign:'center'}}>
                Fill the form and your affiliate application would be initialized and you would be put in touch with developer's team
                </p>
              </div>
              
            </div>
          </div>
          <div class="col-md-4" >
            <div class="card-box-c foo" style={{border: '2px solid #A9B6D3',borderRadius: '15px',padding:'30px',paddingTop:'50px',paddingBottom:'50px'}}>
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span class="bi bi-card-checklist"><i class="fa-solid fa-key"></i></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h3 class="title-c">Get Cashback</h3>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c" style={{textAlign:'center'}}>
                 
                If you decide to go ahead & booking fees is paid, cashback will reach you within specified duration
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section >
      <div class="row" style={{paddingTop:'100px'}}>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{paddingTop: '100px ',paddingLeft:'80px',paddingRight:'80px',paddingInline: '5% 10%'
}}>
        <div className='jumbotron' >
        <p class="lead">
        <button type="button" class="btn btn-lg btn-primary" disabled style={{backgroundColor: 'Blue',text:"bold",borderRadius:'15px'}}>Same Price Gurantee</button>
        </p> 
        <h1 class="display-4" style={{fontfamily: 'Arial, sans-serif',fontweight: '800'}}><strong>CashProp same price guarantee </strong></h1>
        <p class="lead">You can independently or through any other channels check with developer for pricing and if you get a better rate on same unit then our team will get rate matched along with cashback agreed</p>

        <p class="lead">
        <a href="/properties" class="btn btn-primary btn-lg active" role="button"  style={{backgroundColor: 'orange',borderColor: 'orange',borderRadius:'15px'}}>Explore Property</a>
  </p>        </div>
        
    </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <img src={home4} alt="Los Angeles" class="d-block" style={{height: '554px', width: '554px',borderRadius:'10%'}}/>
        </div>

      </div>
    </section>
    <section >
      <div class="row" style={{paddingTop:'100px'}}>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <img src={home5} alt="Los Angeles" class="d-block" style={{height: '554px', width: '554px',borderRadius:'10%'}}/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{paddingTop: '30px ',paddingLeft:'80px',paddingRight:'80px',paddingInline: '5% 10%'
}}>
        <div className='jumbotron' >
        <p class="lead">
        <button type="button" class="btn btn-lg btn-primary" disabled style={{backgroundColor: 'Blue',text:"bold",borderRadius:'15px'}}>Quick and easy</button>
        </p> 
        <h1 class="display-4" style={{fontfamily: 'Arial, sans-serif',fontweight: '800'}}><strong>Hassle Free Process </strong></h1>
        <p class="lead">Get started now with very clear terms and supportive team throughout the process.</p>
        <div className='row'>
        <div class="col-md-6">
            <div class="card-box-c foo" style={{border: '2px solid #A9B6D3',borderRadius: '15px',padding:'20px'}}>
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span ></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c"> Simple Process</h2>
                </div>
              </div>
              <div class="card-body-c align-self-center">
                <p class="content-c">
                Process is stated in very clear manner under the listing and team is always there to help
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-box-c foo" style={{border: '2px solid #A9B6D3',borderRadius: '15px',padding:'20px'}}>
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span ></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c"> Cashback Gurantee </h2>
                </div>
              </div>
              <div class="card-body-c align-self-center">
                <p class="content-c" >
                Your cashback on basis of unit type & developer would be specified at time of application
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <p class="lead">
        <a href="/properties" class="btn btn-primary btn-lg active" role="button"  style={{backgroundColor: 'orange',borderColor: 'orange',borderRadius:'15px'}}>Explore Property</a>
  </p>        </div>
        
    </div>
      </div>
    </section>
</div>
<br></br>
<br></br>
<br></br>
<div className='jumboron' style={{paddingTop: '80px ',backgroundColor: '#EFF2F9'}}>
<p class="lead" style={{textAlign:'center'}}>
        <button type="button" class="btn btn-lg btn-primary" disabled style={{backgroundColor: 'Blue',text:"bold",borderRadius:'15px 50px'}}>Properties</button>
        </p> 
        <h1 class="display-4" style={{fontfamily: 'Arial, sans-serif',fontweight: '800',textAlign:'center'}}><strong>Houses in your favorite area</strong></h1>
        <br></br>
        <br></br>
        <br></br>

        <div className=" container ">
        <div className="row mb-2 ">
        {pageData.map((item, index) => (
    <div key={index} class="col-sm-6 col-md-4">
    <div class="card-box-a card-shadow">
      <div class="img-box-a">
        <img src={home4} alt="" class="img-a img-fluid " style={{borderRadius:'15px', height:'374px', width:'374px'}}/>
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
    <br></br>

  </div>
    
  ))}  
        </div>

        <p class="lead" style={{textAlign:'center'}}>
        <a href="/properties" class="btn btn-primary btn-lg active" role="button"  style={{backgroundColor: 'orange',borderColor: 'orange',borderRadius:'15px 50px'}}>Explore More Property</a>
  </p>   
  <br/>
  <br/>
        </div>
        
  </div> 


      <div><Footer /></div>
      
    </div>

    </>
  );
};

export default Home;
