import React from 'react';

const PortfolioSubmission = () => {
  return (
    <div className="boxContainer">
      <div className="portfolioContainer ml-3">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Portfolio Submission</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="githubUrl" className="form-label">GitHub URL</label>
                <input type="text" className="form-control" id="githubUrl" />
              </div>
              <div className="mb-3">
                <label htmlFor="portfolioUrl" className="form-label">Portfolio URL</label>
                <input type="text" className="form-control" id="portfolioUrl" />
              </div>
              <div className="mb-3">
                <label htmlFor="resumeUrl" className="form-label">Resume URL</label>
                <input type="text" className="form-control" id="resumeUrl" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p className="mt-3"><strong>Note:</strong> You won't be able to submit when the portfolio is under review or reviewed.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
      );
};

export default PortfolioSubmission;
