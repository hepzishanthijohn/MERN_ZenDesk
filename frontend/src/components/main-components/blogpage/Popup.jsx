import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle modal open/close state
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      // Open the modal after a certain duration (e.g., 3000 milliseconds)
      const timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
  
      // Clear the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }, []);

    const navigateTo=useNavigate();
    const handleHomePage =  () =>{
        navigateTo("/registrationform")
       }
    return (
        <>
        
            {isOpen && (
                <div className="modal" tabIndex="-1" style={{ display: 'block',fontSize:"20px", fontFamily:"Poppins" }} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                           
                            
                            <div className="modal-body">
                                <p>Get Started Learning </p>
                                <a href="/loginform">Login here</a>
                            </div>
                            <br></br>
                            <div className="modal-body">
                                <p>If you're new to this page</p>
                                <label>Create new account </label>
                                <br></br>
                                <button className='btn btn-primary' onClick={handleHomePage}><h3>Register here</h3></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  style={{fontSize:"15px"}} className="btn btn-secondary" onClick={toggleModal}>
                                    Close
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>

)}
        </>
    )
}

export default Popup;