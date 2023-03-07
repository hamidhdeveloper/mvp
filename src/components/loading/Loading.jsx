import React from "react";
import './Loading.scss'

const Loading = () => {
  return (
    <>
      <div className="loadingContianer">
      <div class="spinner-border text-warning myloading" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
    </>
  );
};

export default Loading;
