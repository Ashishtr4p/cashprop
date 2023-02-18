import React from 'react';
import '../app.css';
function Header() {
  return (
    <div >
      
<nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="navbar-brand text-brand" href="/"><span class="color-ab">Cash</span><span class="color-b">Prop</span></a>

      <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul class="navbar-nav">

        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/properties">Properties</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reviews">Contact</a>
        </li>
        </ul>
      </div>
      <a href="/properties" class="btn btn-primary btn-lg active" role="button"  style={{backgroundColor: 'orange',borderColor: 'orange',borderRadius:'15px'}}>Find Property</a>
      

    </div>
  </nav>
    </div>
    
  );
};

export default Header;
