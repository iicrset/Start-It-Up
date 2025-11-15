// src/pages/ProfileBookPage.jsx
import React from "react";
import { Navbar } from "./Navbar";

export default function ProfileBookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex justify-center items-center mt-12">
        <div style={{ position: "relative", width: "90%", paddingTop: "70%" }}>
          <iframe
            src="https://online.fliphtml5.com/xgblu/oupo/"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            title="Profile Book Flipbook"
            seamless
            scrolling="no"
            allowTransparency
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
