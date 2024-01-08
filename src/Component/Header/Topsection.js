import React from "react";
import { Link } from "react-router-dom";
import './Topsection.css';

import logo from '../images/Group 1171276349 1.png';
const Topsection = () => {
    return(
      <>
<header className="header-sec-1">
   
   <section className="">
       <div className="nav-bar">
           <div className="container">
               <nav className="navbar navbar-expand-lg">
                   <Link to="34" className="nav-logo navbar-brand">
                       <img src={logo} alt="Logo"/>
                   </Link>
                   <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                       type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="toggler-icon top-bar"></span>
                       <span className="toggler-icon middle-bar"></span>
                       <span className="toggler-icon bottom-bar"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav ms-auto  py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1-navbar border-nav  ">
                           <li className="nav-item">
                               <Link className="nav-link nav-pages active" aria-current="page" to="">Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages" to="55">Our Solution</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages" to="56">Case Study</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages" to="78">Insights</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages" to="90">Company</Link>
                           </li>
                       </ul>
                       <Link to="#"
                           className="btn  nav-btn rounded-pill border-2 ms-auto"
                           target="_blank">Get Started</Link>
                       </div>    
               </nav>
           </div>
       </div>
   </section>
   <section className="container ">
       <div className="position-text ">
           <div className="col-lg-7 col-md-7 col-sm-12 ">
              <h4 className="text-1">Crafting Solutions, Fuelling Collaborations: </h4>
              <h2 className="text-2">Tekcorp - Your Partner in Digital Transformation</h2>
              <p className="text-3">Explore Services, Products, and Integrations for a Future-Ready Business Ecosystem. Tailored Services, Proven Products, Seamless Integrations – Elevating Your Business, Empowering Your Growth.</p>
              <Link className="contact-now" to="#">Contact Now <span>=</span></Link>
           </div>
       </div>
   </section>
</header>
      </>
    );
}
export default Topsection;
