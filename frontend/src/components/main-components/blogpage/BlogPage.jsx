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
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img14} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img3} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img4} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img5} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
          </div>
        </div>
        {/* end of item */}
        {/* item */}
        <div className="design-item">
          <div className="design-img">
            <img src={img6} style={{height:"300px"}}  />
            <span><i className="far fa-heart" /> 22</span>
            <span>Art &amp; Design</span>
          </div>
          <div className="design-title">
            <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
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
        <p>recent blogs about art &amp; design</p>
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
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h2 >Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
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
            <h1 style={{fontSize:"4rem"}}><strong>WEB DEVELOPMENT</strong></h1>
            <p style={{fontSize:"2rem"}}>Web design is my passion</p>
          </div>
          <p style={{fontSize:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam voluptatem saepe eius ipsum nam provident sapiente, natus et vel eligendi laboriosam odit eos temporibus impedit veritatis ut, illo deserunt illum voluptate quis beatae quod. Necessitatibus provident dicta consectetur labore!</p>
          <p style={{fontSize:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident rem sint porro fuga quos tempora ea suscipit vero velit sed laudantium eaque necessitatibus maxime!</p>
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