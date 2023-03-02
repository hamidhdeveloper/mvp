import React from 'react'
import './GoodJob.scss'
import { Link } from 'react-router-dom'
import makeitreal from "../../../images/makeitreal.png";

const GoodJob = () => {
  return (
    <>
      <div className='container-fulid goodjobmaincontainer'>
        <div className='row goodjobsection'>
            <div className='col-md-6 goodjobsection-left'>

            </div>
            <div className='col-md-6 goodjobsection-right'>
              <h1>Good<br/>Job!</h1>
              <p>Congratulations on your first AI artwork.<br />Want to hang it in your home?</p>
              <div className="reimg-button-container" >
              
              <Link to="/mvp" style={{marginTop: '200px' }}>Make it real
              <img src={makeitreal} alt="retry arrow" />
              </Link>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GoodJob
