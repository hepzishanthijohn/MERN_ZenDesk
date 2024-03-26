import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div>
     
        <footer className="text-center  text-lg-start bg-black text-muted" style={{fontSize:"16px"}}>
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white-50">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-github"></i>
      </a>
    </div>
    
  </section>
  
  <section className="text-white-50">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-5">
        
      <div className="col-md-1 col-lg-1 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-5 text-white">
            Zen Class
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Full Stack Development</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Automation & Testing</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Data Science</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">UI/UX</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">DevOps</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Data Engineering</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Business Analytics with Digital Marketing</a>
          </p>

          <p>
            <a href="#!" className="text-reset text-decoration-none">All Programs</a>
          </p>

        </div>
       

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-5 text-white">
            Popular Courses
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Python</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Java</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Mobile Hacking</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">C programming</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">AWS</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Dark Web</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">All Courses</a>
          </p>

        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-5 text-white">
            Self-paced courses
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Premium Pass</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Couses Library</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Free Library</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Combos</a>
          </p>
          
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-5 text-white">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
     </div>
    </div>
  </section>
  

 
  <div className="text-center p-4 text-white-50" style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright
  </div>
  
</footer>
    </div>
  )
}

export default Footer;