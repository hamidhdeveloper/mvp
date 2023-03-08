import React, { useState } from "react";
import "./Retry.scss";
import retryArrow from "../../../images/retry-arrow.png";
import retryMain from "../../../images/carimg.png";
import retry1 from "../../../images/ret1img.png";
import retry2 from "../../../images/ret2img.png";
import retry3 from "../../../images/ret3img.png";
import retry4 from "../../../images/ret4img.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../../loading/Loading";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { selectedFrameImage } from "../../../store/slices/GenerateImagesSlice";

const Retry = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const location = useLocation();
  const currentdir = localStorage.getItem("dir");

  // for clicking current image
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setClickedImage(imageUrl);
    // console.log(imageUrl);
  }

  // for loading
  const [isLoading, setIsLoading] = useState(false);

  // openai
  const [textPrompt, setTextPrompt] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");
  //  openaiend

  const generateImage = async () => {
    try {
      setClickedImage(null)
      setIsLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          model: "image-alpha-001",
          prompt: textPrompt,
          n:5,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const imageUrl1 = response.data.data[0].url;
      const imageUrl2 = response.data.data[1].url;
      const imageUrl3 = response.data.data[2].url;
      const imageUrl4 = response.data.data[3].url;
      const imageUrl5 = response.data.data[4].url;
      
      setImageUrl1(imageUrl1);
      setImageUrl2(imageUrl2);
      setImageUrl3(imageUrl3);
      setImageUrl4(imageUrl4);
      setImageUrl5(imageUrl5);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

// Call generateImage function five times to generate five images



  if (location.pathname === "/retry") {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }
// for selected image
 const selectImage= ()=>{
  if(clickedImage){
    dispatch(selectedFrameImage(clickedImage))
  }else{
    dispatch(selectedFrameImage(imageUrl1))
  }

  
}


  return (
    <>
      <div
        className="container-fulid retry-main-container"
        id="retry-main-container"
        style={currentdir === "rtl" ? { direction: "ltr" } : {}}
      >
        <div className="row retry-container">
          <div className="col-md-7 retry-left">
            <h1>{t("Retry?")}</h1>
            <p>
              {t("Don’t worry")}
              <br /> {t("Change your words and make again.")}
            </p>
            <div className="retry-input-container">
              <input
                className="retryinput"
                type="text"
                placeholder={t("flying car in space...")}
                name="search"
                value={textPrompt}
                onChange={(e) => setTextPrompt(e.target.value)}
              />
              <Link>
                <button onClick={generateImage} className="retrycreate">
                  {t("Create Image")}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-5 retry-right">
            <div className="reimgcontainer">
            {imageUrl1 ? (
              <>
              <div className="rety-right-top">
                {clickedImage ? (
                   <img src={clickedImage} alt="retry" />
                ):(
                <img src={imageUrl1}  alt="retry" onClick={() => handleImageClick(imageUrl1)} />
                  )}
              </div>
              <div className="rety-right-buttom">
                <img src={imageUrl2} alt="retry"  onClick={() => handleImageClick(imageUrl2)}/>
                <img src={imageUrl3} alt="retry" onClick={() => handleImageClick(imageUrl3)}/>
                <img src={imageUrl4} alt="retry" onClick={() => handleImageClick(imageUrl4)}/>
                <img src={imageUrl5} alt="retry" onClick={() => handleImageClick(imageUrl5)}/>
              </div> 
              </>
) : (
  <>
              <div className="rety-right-top">
                <img src={retryMain} alt="retry" />
              </div>
              <div className="rety-right-buttom">
                <img src={retry1} alt="retry" />
                <img src={retry2} alt="retry" />
                <img src={retry3} alt="retry" />
                <img src={retry4} alt="retry" />
              </div> 
              </>
)}
              
            </div>
            
            <div className="reimg-button-container">
              <Link to='/canvasprinting' onClick={selectImage}>
                {t("Better with frame")}
                <img src={retryArrow} alt="retry arrow" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Retry;
