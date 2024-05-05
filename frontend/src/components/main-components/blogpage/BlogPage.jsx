import React from 'react'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.png';
import img6 from './images/img6.jpg';
import img7 from './images/img7.webp';
import img8 from './images/img8.png';
import img9 from './images/img9.webp';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpeg'
import img12 from  './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from './Footer'
import './blog.css'
import Popup from '../Homepage/Popup';

const BlogPage = () => {
  return (
   <div>
   <Popup></Popup>
  <header>
    
    <div className="banner">
      <div className="container">
        <h1 className="banner-title" >
          <span >Web Develpment.</span> Course Blog
        </h1>
        <p style={{fontSize:"2rem"}}>everything that you want to know about development &amp; design</p>
        <form>
          <input type="text" className="search-input" placeholder="find your course . . ." />
          <button type="submit" className="search-btn">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
    <Navbar></Navbar>
  </header>
  {/* end of header */}
  {/* design */}
  <section className="design" id="design">
    <div className="container">
      <div className="title">
        <h2>Web Development Courses</h2>
        <p>recent trending Courses on the blog</p>
      </div>
      <div className="design-content" >
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img2} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#" > developing both the frontend and backend of applications.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img14} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#">Discover the perfect start to your web journey with our handpicked Vue JS project ideas</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img3} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#">The library for web and native user interfaces</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img4} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#"> collection of technologies that help developers build Web Apllication</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img5} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#">Start your coding journey with Python courses and tutorials.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img6} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span></span>
          </div>
          <div className="design-title">
            <a href="#">Find out everything you need to know about learning AI in 2024</a>
          </div>
        </div>
        {/* end of item */}
      </div>
    </div>
  </section>
  {/* end of design */}
  {/* blog */}
  <section className="blog" id="blog">
    <div className="container">
      <div className="title">
        <h2>Latest Blog</h2>
        <p>recent blogs about </p>
      </div>
      <div className="blog-content">
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img7} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Enroll in online cyber security courses Develop the cyber security skills.</h2>
            <p>The most common path people take when pursuing a job in cyber security is getting a degree.Develop the cyber security skills</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img8} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Free HTML Course: Complete Roadmap to Learn HTML</h2>
            <p>Unlock Web Development skills, Learn HTML Course for Free. Dive into the basics and master HTML for building dynamic and responsive websites. Join now!
.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img13} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>starting your journey in web development and learn Angular?</h2>
            <p>start working on the Angular framework and develop dynamic web applications.Building a strong foundation on the concepts of web Applications.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img12} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2>Begin Your Machine Learning Journey from Scratch</h2>
            <p>Discover the step-by-step guide to start Machine Learning models from scratch. Learn the fundamentals, coding skills, data preprocessing.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img9} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text">
            <span>20 January, 2020</span>
            <h2> Digital marketing has become an essential aspect of any business</h2>
            <p>Learn The Basics of Digital Marketing.Start Your Own Website. Become An SEO Expert. Digital marketing allows businesses to track the success</p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="blog-item">
          <div className="blog-img">
            <img src={img10} style={{height:"350px"}}  />
            <span><i className="far fa-heart" /></span>
          </div>
          <div className="blog-text" >
            <span>20 January, 2020</span>
            <h2 >How To Become a UI UX Designer? [Step-by-Step Guide]</h2>
            <p>Want to become a UI designer but don’t know where to start? Let’s break down the process step by step.familiarize yourself with design principles </p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* end of item */}
      </div>
    </div>
  </section>
  {/* end of blog */}
  {/* about */}
  <section className="about" id="about">
    <div className="container">
      <div className="about-content">
        <div>
          <img src={img11} style={{height:"500px"}}  />
        </div>
        <div className="about-text">
          <div className="title">
            <h1 style={{fontSize:"3rem"}}><strong>WEB DEVELOPMENT</strong></h1>
            <p style={{fontSize:"1.7rem"}}>Web design is my passion</p>
          </div>
          <p style={{fontSize:"1.2rem"}}>Are you eager to embark on a web development journey? Excited about the endless possibilities of creating stunning websites and applications? Look no further! In this comprehensive guide, we will walk you through the essential steps and provide valuable insights to help you kickstart your web development career.</p>
          <p style={{fontSize:"1.2rem"}}>Before diving into the vast ocean of web development, it's crucial to understand the basics. Familiarize yourself with the core technologies that power the web, such as HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </div>
  </section>
  {/* end of about */}
  {/* footer */}
  <footer>
    <Footer></Footer>
    <div className="social-links">
      <a href="#"><i className="fab fa-facebook-f" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-pinterest" /></a>
    </div>
    <span>Development.Design Blog Page</span>
  </footer>
</div>

  )
}

export default BlogPage