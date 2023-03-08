import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import "./StartCreating.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loading from "../../loading/Loading";
import {useDispatch} from 'react-redux'
import { geneatedImages } from "../../../store/slices/GenerateImagesSlice";



const StartCreating = () => {
  const dispatch = useDispatch()
  // tranlation
  const { t } = useTranslation();
  const currentdir = localStorage.getItem("dir");
  // for loading
  const [isLoading, setIsLoading] = useState(false);
  // openai
  const [textPrompt, setTextPrompt] = useState("");
  const [imageURL, setImageURL] = useState("");
  //  openaiend

  const generateImage = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          model: "image-alpha-001",
          prompt: textPrompt,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );

      setImageURL(response.data.data[0].url);
      
      dispatch(geneatedImages(response.data.data[0].url))
      // console.log('this is image url'+)
      setIsLoading(false);
    } catch (error) {
      // history.push("/error");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid myContainer">
        <div
          className="mycreating"
          id="mycreating"
          style={currentdir === "rtl" ? { direction: "ltr" } : {}}
        >
          <div className="row">
            <div className="col-md-12 mycreatingcol">
              {currentdir === "rtl" ? (
                <h1 className="text-center">يبدأ</h1>
              ) : (
                <h1 className="text-center">
                  St<span style={{ color: "#FEC30E" }}>art</span>
                </h1>
              )}
              <h2 className="text-center">{t("Creating?")}</h2>
              <p>{t("Write whatever you want and we")}</p>
              <div className="container createimgcontainer">
                <div className="row">
                  <div className="col-md-12 createimgcol">
                    <input
                      className="search"
                      type="text"
                      placeholder={t("flying car in space...")}
                      name="search"
                      value={textPrompt}
                      onChange={(e) => setTextPrompt(e.target.value)}
                    />
                    <Link>
                      <button onClick={generateImage} className="createimg">
                        {t("Create Image")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fulid mycarouselControls">
          <div className="row framecontent">
            <div className="col-md-12 myImgCarouselcol"></div>
            {imageURL && (
              <>
                <div className="frame1 col-md-3">
                  {imageURL && (
                    <img
                      src={imageURL}
                      alt="Generated Pictures"
                      style={{
                        height: "186px",
                        width: "122px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </div>
                <div className="frame2 col-md-3">
                  {imageURL && (
                    <img
                      src={imageURL}
                      alt="Generated Pictures"
                      style={{
                        height: "285px",
                        width: "213px",
                        borderRadius: "119px",
                      }}
                    />
                  )}
                </div>
                <div className="frame3 col-md-3">
                  {imageURL && (
                    <img
                      src={imageURL}
                      alt="Generated Pictures"
                      style={{
                        height: "270px",
                        width: "247px",
                        borderRadius: "159px",
                      }}
                    />
                  )}
                </div>
                <div className="frame4 col-md-3">
                  {imageURL && (
                    <img
                      src={imageURL}
                      alt="Generated Pictures"
                      style={{
                        height: "302px",
                        width: "192px",
                        marginTop: "23px",
                        marginLeft: "-59px",
                      }}
                    />
                  )}
                </div>

              </>
            )}

            <div className="col-md-12 myImgCarouselcol">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default StartCreating;
