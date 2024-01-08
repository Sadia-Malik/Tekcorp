import React from "react";

import img2 from "./images/Group-250.jpg"
import arrow from "./images/Frame-3.png"
// import Footericon from '../images/call-calling.png';
const OurStrategic = () => {
    return(
      <>
     <section class=" container mt-5 mb-5">
       <div class="d-lg-flex d-md-flex justfy-content-between">
        <div class="col-lg-6 col-md-6 co-sm-12 mt-5 mb-5">
            <h3 class="Our-stra">Our Strategic Partners</h3>
            <p class="Our-stra-p">Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase</p>
            <p class="Our-stra-p">Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
            <button type="" class="btn btn-c">Start Now <img src={arrow} alt="icon"/></button>
       </div>
       <div class="col-lg-5 col-md-5 col-sm-12  offset-lg-1 offset-md-1 ">
         <img src={img2} class="img-fluid w-100" alt="iui"/>
      </div>
       </div>
    </section>
      </>
    );
}
export default OurStrategic;
