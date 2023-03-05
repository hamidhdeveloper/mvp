import React from 'react'
import './GoodJob.scss'
import { Link,useLocation } from 'react-router-dom'
import makeitreal from "../../../images/makeitreal.png";
import { useTranslation  } from "react-i18next";

const GoodJob = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentdir = localStorage.getItem("dir");
  if(location.pathname === '/goodjob') {
    document.body.style.paddingRight= '0px';
  }
  return (
    <>
      <div className='container-fulid goodjobmaincontainer' style={
            currentdir === "rtl"
              ? { direction: "ltr" }
              : {}
          }>
        <div className='row goodjobsection'>
            <div className='col-md-6 goodjobsection-left d-none d-md-block'>

            </div>
            <div className='col-md-6 goodjobsection-right'>
              <h1>{t('Good')}<br/>{t('Job')}</h1>
              <p>{t('Congratulations on your first AI artwork.')}<br />{t('Want to hang it in your home?')}</p>
              <div className="good-button-container" >
              
              <Link to="/mvp" style={{marginTop: '200px' }}>{t('Make it real')}
              <img src={makeitreal} alt="retry arrow"  className='img-fluid'/>
              </Link>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GoodJob
