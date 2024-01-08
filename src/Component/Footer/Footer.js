import React from "react";

import './Footer.css';
import Form from "../Form";
import Footericon from '../images/call-calling.png';
const Footer = () => {
    return(
      <>
      <Form/>
        <footer className="container-fluid footer-container">
        <div className="container py-5">
           <div className="d-lg-flex d-md-flex justify-content-between ">
             <div className="col-lg-5 col-md-5 col-sm-12 mt-3">
                <p className="text-c2-p">
                    Let's build or improve your digital product
                </p>
                <h4 className="footer-text-1">No project is too big or too small. Hit us up and let's build.</h4>
                <div className="  border-footer d-flex justify-content-between  align-items-center  "> 
                    <p className="text-c2-p">Get Started</p>
                    <p className="card-cir-footer">
                      <i className="fa-solid fa-code"></i>
                    </p>
                 </div>
             </div>
             <div className="col-lg-2 col-md-2 col-sm-12 mt-5">
                 <div>
                    <img src={Footericon} alt="mgg" className="img-fluid"/>
                 </div>
             </div>
           </div>
           <hr className="line-color"/>
        </div>


     
       <section className="container">
       
            <div className="d-lg-flex d-md-flex justify-content-between">
             <div className="col-lg-3 col-md-3 col-sm-12">
                 <p className="text-c2-p2">Contact</p>
                 <p className="text-c2-p3">tekcorp@gmail.com</p>
                 <p className="text-c2-p3">+57 300 670 2491</p>
             </div>
             <div className="col-lg-3 col-md-2 col-sm-12">
                 <p className="text-c2-p2">Quiick Links</p>
                 <p  className="text-c2-p3" ><a  className="text-c2-p3"href="ui">About</a></p>
                 <p  className="text-c2-p3"><a className="text-c2-p3" href="ui">Services</a></p>
                 <p  className="text-c2-p3"><a className="text-c2-p3" href="uii">Contact Me</a></p>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-12">
                 <p className="text-c2-p2">legal</p>
                 <p  className="text-c2-p3">Privacy policy</p>
                 <p  className="text-c2-p3">Terms & conditions</p>
                 <p className="text-c2-p3">Sitemap</p>
             </div>
         
             <div className="col-lg-3 col-md-4 col-sm-12">
                
                 <p className="text-c2-p2">Follow</p>
                 <div className="card-cir-footer-last text-white">
                     <i className="fa-brands fa-facebook-f"></i>
                     <i className="fa-brands fa-twitter"></i>
                     <i className="fa-brands fa-linkedin-in"></i>
                    </div>
             </div>
            
         </div>
       </section>
         
    </footer>
      </>
    );
}
export default Footer;
