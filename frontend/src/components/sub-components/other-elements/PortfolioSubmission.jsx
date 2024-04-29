import React from 'react'
const PortfolioSubmission = () => {
  return (
    
    
    <>
      <div className="d-flex vw-80 vh-80  justify-content-center align-items-center fs-5">
        <div className="w-50 bg-white rounded p-4" style={{ marginTop: "6rem" }} >

    
      <div >
   <div className='form-group'>
   <label htmlFor="">GitHub URL</label>
    <br />
    <input className="form-control" type="text" />
   </div>
    <br />
    <label htmlFor="">Portfolio URL</label>
    <br />
    <input className="form-control" type="text" />
    <br />
    <label htmlFor="">Resume URL</label>
    <br />
    <input className="form-control" type="text" />
    <br />
    <br />
    <button className='btn btn-primary'>Submit</button>
    <br />
   </div>
     
    <br />
    <p><strong>Note:</strong>You Wont be Able to Submit When the Portfolio is under Review or Reviewed.</p>
    </div>
    </div>
      
    </>
  )
}

export default PortfolioSubmission;
