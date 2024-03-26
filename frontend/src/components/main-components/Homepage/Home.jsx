import React from 'react'
import Footer from './Footer'
import img1 from './images/img4.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img7.webp';
import img5 from './images/img6.avif';
import img6 from './images/img6.jpg';
import img7 from './images/img9.webp';
import img8 from './images/img8.png';
import img9 from './images/img10.jpg';
import Popup from './Popup';
import { Link } from 'react-router-dom'
import './style.css'

import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className='appItems'>
      <Popup></Popup>
        <div className="jumbotron">
        <div className="container text-center" >
          <h1 >Start Your FullStack Career </h1>      
          <p>Choose the right path to get your career growth</p>
        </div>
      </div>
      
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" 
            data-bs-toggle="collapse" 
            data-bs-target="#myNavbar"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav" id='leftNavList'>
              <li><a className="navbar-brand" href="#"><i className="fa fa-cube" style={{fontSize:""}}></i></a></li>
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right" id="rightNavList">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
              <li><Link to="/"> Back</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-5 g-5">
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
      </div>
          <br></br>
      
      <div className="container">    
      <div className="row row-cols-1 row-cols-md-5 g-5">
      <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
      </div><br/><br/>
      <div className="container">    
      <div className="row row-cols-1 row-cols-md-5 g-5">
      <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img7} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img8} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{width:"29rem"}}>
      <img src={img9} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
      </div><br/><br/>
      <Footer></Footer>
      
    </div>
  )
}

export default Home