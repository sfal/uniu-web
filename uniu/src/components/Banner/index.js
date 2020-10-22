import "./style.css"

import React from "react"
import { ReactComponent as AppStore } from "@assets/app-store-badge.svg"
import GooglePlay from "@assets/google-play-badge.png"

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ transition: "color 0.2s ease-out, background 0.2s ease-out" }}
    >
      <div className="banner__left">
        <div className="banner__left__copy">
          <h5>UNIU</h5>
          <h3>
            Scaricala ora su <br /> Google Play e App Store
          </h3>
        </div>
        <div className="banner__left__badges">
          <a href="/" className="banner__left__badges__apple">
            <AppStore />
          </a>
          <a href="/" className="banner__left__badges__google">
            <img src={GooglePlay} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
