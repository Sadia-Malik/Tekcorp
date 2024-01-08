import React from "react";


// import Footericon from '../images/call-calling.png';
const Form = () => {
    return(
      <>
           <section className="container form-container py-5 px-4 po-main mt-5">
        <div className="d-lg-flex justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
                
              <div>
                <span className="colr">-</span>
                <span  className="colr">Contactus</span>
              </div>
               <h4 className="text-c">Do you have any questions or would you like to know more about our services?</h4>
               <p className="text-c2-p">Then don't hesitate to contact us. We are here to help and answer all your questions about our dental services. </p>

              <div className="po23">
                <div className="text-c2-p">
                    At <span className="colr">TekCorp</span>, your reliable partner for Information Technology from Pakistan, we are always ready to support you.
                   </div>
    
                   <div className="form-iconn bg-secondary text-white">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                   </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 offset-lg-2 offset-md-2 bg-white px-3 py-4 rounded-3">
                <p className="">Contact Us</p>
               <form >
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label text-c2">Full Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="mb-2">
                  <label for="exampleInputPassword1" className="form-label text-c2">Email Address</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label for="" className="form-label text-c2">Message</label>
                    <textarea className="form-control text-areaa"  id="floatingTextarea2" ></textarea>
                   
                  </div>
                <button type="submit" className="btn btnnn">Contact Us</button>
              </form>
            
            </div>
        </div>
    </section>
      </>
    );
}
export default Form;
