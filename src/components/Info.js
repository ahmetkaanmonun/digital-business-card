import React from "react";
import photo from "../images/photo.png";

export default function Info() {
  return (
    <div>
      <img className="info-photo" src={photo}></img>
      <h3 className="info-header">Ahmet Kaan Mönün</h3>
      <p className="info-job">Frontend Developer</p>
      <p className="info-site">ahmetkaanmonun.website</p>
      <div className="buttons">
        <button className="email-button">
          <i class="fa-solid fa-envelope"></i>
          <p>Email</p>
        </button>
        <button className="linkedin-button">
          <i class="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </button>
      </div>
    </div>
  );
}
