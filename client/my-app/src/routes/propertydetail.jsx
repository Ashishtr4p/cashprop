import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import reactLogo from "./vibe.jpg";
import '../routes/style.css';
import '../routes/main.js';
import Footer from "../component/footer";
import '../app.css';
import StarRating from "../component/StarRating";

function Propertydetail () {
  
  const { id } = useParams();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/properties/${id}/reviews`)
      .then(response => response.json())
      .then(data => setData2(data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:3001/properties/${id}`)
      .then(response => response.json())
      .then(data => setData1(data));
  }, [id]);
  

  return (
    <><div>
      <Header />
    </div>
    <div class="body container "> 
        
    {data1.map((item, index) => (
    <div key={index}>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-box-d">
              <h1 class="title-d">{item.name}</h1>
              <span class="color-text-a">{item.location}</span>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
              <ol class="breadcrumb">
              <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/properties">Properties</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {item.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
         <div class="col-md-6 col-lg-6">
         <img src={reactLogo} className=" figure-img img-fluid " alt={item.name} style={{height: '700px', width: '600px',borderRadius:'7%'}} />
         </div>
         <div class="col-md-6 col-lg-6">
          <div className="row">
          <div class="col-md-6 col-lg-6">
          <img src={reactLogo} className="card-img-top  " alt={item.name} style={{height: '350px', width: '300px',borderRadius:'5%',padding:'3px'}} />
         </div>
         <div class="col-md-6 col-lg-6">
         <img src={reactLogo} className="card-img-top " alt={item.name} style={{height: '350px', width: '300px',borderRadius:'5%',padding:'3px'}} />
         </div>
         <div class="col-md-6 col-lg-6">
         <img src={reactLogo} className="card-img-top " alt={item.name}  style={{height: '350px', width: '300px',borderRadius:'5%',padding:'3px'}}/>
         </div>
         <div class="col-md-6 col-lg-6">
         <img src={reactLogo} className="card-img-top " alt={item.name}  style={{height: '350px', width: '300px',borderRadius:'5%',padding:'3px'}}/>
         </div>
          </div>
         </div>
         <br></br>
        </div>
        <br>
        
        </br>
      <section class="property-single nav-arrow-b">
      <div class="container">
        <div className="row">

        </div>
        

        <div class="row">
          <div class="col-sm-12">

            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">
                <div class="property-price d-flex justify-content-center foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="bi bi-cash">{item.cashback}%</span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h5 class="title-c">CashBack</h5>
                    </div>
                  </div>
                </div>
                <div class="property-summary">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Quick Summary</h3>
                      </div>
                    </div>
                  </div>
                  <div class="summary-list">
                    <ul class="list">
                      <li class="d-flex justify-content-between">
                        <strong>Property Name:</strong>
                        <span>{item.name}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Location:</strong>
                        <span>{item.location}</span>
                      </li>
                      
                      <li class="d-flex justify-content-between">
                        <strong>Status:</strong>
                        <span><b>{item.on_sale ? 'On Sale' : 'Sold'}</b></span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Price:</strong>
                        <span>Rs. {item.price} Lakhs
                          
                        </span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Beds:</strong>
                        <span>{item.bhk}</span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Property Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description">
                  <p class="description color-text-a">
                  Prestige Elm Park is an elegant, holistic residential enclave that is located in one of the real estate destinations of the city, Channasandra. Located in the idyllic Kadugodi neighborhood of East Bangalore, this is a residential development that exemplifies sophisticated living in Bangalore. This is a rapidly developing locality in the residential hotspot of East Bangalore, one that is much coveted by investors. Channasandra is a desirable neighborhood in the trendy suburb of East Bangalore, which is steadily attracting huge numbers of residents. A prominent employment hub of the city, this locality also has easy access to other large employment hubs and workspaces. This locality is a modern, well-developed urban area, one of the preferred residential addresses in the city of Bangalore today. Prestige Elm Park is a luxurious residential project by the Prestige Group, a builder well known for its elite developments. Every project developed by this real estate development company is a superior example of excellence in architectural design and engineering. This high-end enclave features opulent residences nestled in salubrious settings with a host of world-class amenities available on the premises. Key Dates: Launch Date: 17th January 2023 Completion Date: Four years from date of launch Possession Date: May 2027 (RERA), May 2026 (Developer)
                  </p>
                  <p class="description color-text-a no-margin">
                  Very limited slots available for Pre-Launch. Please fill the form and we will share the brochure and other details and help you schedule a site visit.
                  </p>
                </div>
                <div class="row section-t3">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Facilities</h3>
                    </div>
                  </div>
                </div>
                <div class="amenities-list color-text-a">
                  <ul class="list-a no-margin">
                    <li>Balcony</li>
                    <li>Cable Tv</li>
                    <li>Tennis Courts</li>
                    <li>Internet</li>
                    <li>Parking</li>
                    <li>Concrete Flooring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-12">
            <div class="row section-t3">
              <div class="col-sm-12">
                <div class="title-box-d">
                  <h3 class="title-d">Contact Agent</h3>
                </div>
              </div>
            </div>
            <div class="row">
              
              <div class="col-md-6 col-lg-8">
                <div class="property-agent">
                  <h4 class="title-agent">Steps to Follow:-</h4>
                  <p class="color-text-a">
                  Step 1: Fill out the interest form for the property.
                      <br />
                      Step 2: We will reach out to you with your Application ID, brochure & other details and get you on the Pre-Launch List. You will also be provided a CashProp relationship manager for any support needed in the process. 
                      <br />
                      Step 3: If everything goes well and you decide to go ahead with the booking, mention CashProp in the referral section of the booking form, take an image of the document, and mail it to support@cashprop.in with the Application ID for reference along with the bank account details you want the cashback to be processed to
                      <br />
                      Step 4: Complete the agreement process for the property with the developer, after this the cashback processing is initiated
                      <br />
                      Step 5: You will receive the cashback within 45 days from the agreement signing date
                  </p>
                  <ul class="list-unstyled">
                    
                    <li class="d-flex ">
                      <strong>Mobile:</strong>
                      <span class="color-text-a">+91-8618368702</span>
                    </li>
                    <li class="d-flex ">
                      <strong>Email:</strong>
                      <span class="color-text-a">support@cashprop.in</span>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="property-contact">
                  <form class="form-a">
                    <div class="row">
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <input type="text" class="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required />
                        </div>
                      </div>
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                        </div>
                      </div>
                      <div class="col-md-12 mb-1">
                        <div class="form-group">
                          <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 mt-3">
                        <button type="submit" class="btn btn-a">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
      

    
    </div>
  ))}  
  
  
  
  
</div>
<div className="container">
<div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
            <div class="title-box-d">
              <h4 class="title-d">Comments</h4>
            </div>
  {data2.map((cmt, index) => (
    <div key={index} className="col-md-4">
      
            
              <ul class="list-comments">
                <li>
                  <div class="comment-details">
                    <h5 class="comment-author">{cmt.name}   <span><StarRating rating={cmt.rating} /></span> </h5>
                    
                    <p class="comment-description">
                    
                      {cmt.review}
                    </p>
                  </div>
                </li>
              </ul>
            
            
        </div>
        ))}
      </div>
 
  </div>
 <div><Footer /></div>
      
      </>
  );
};

export default Propertydetail;
