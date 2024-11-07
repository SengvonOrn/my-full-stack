import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

export const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>For Better Experience Dowload</p>
      <div className="app-downlaod-flatform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};
