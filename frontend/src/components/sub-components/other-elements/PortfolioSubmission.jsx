import React from 'react'
import './other-elements.css'

const PortfolioSubmission = () => {
  return (
    <>
    <div className="headElement">
    <h1 className='headItem'>Capstone</h1>
    <hr />
    </div>
  
    <div className="elementsContainer">
    <label htmlFor="">GitHub URL</label>
    <br />
    <input type="text" />
    <br />
    <label htmlFor="">Portfolio URL</label>
    <br />
    <input type="text" />
    <br />
    <label htmlFor="">Resume URL</label>
    <br />
    <input type="text" />
    <br />
    <br />
    <button className='btn btn-primary'>Submit</button>
    <br />
    <br />
    <p><strong>Note:</strong>You Wont be Able to Submit When the Portfolio is under Review or Reviewed.</p>
    </div>
    </>
  )
}

export default PortfolioSubmission