import React from "react";
import fb from "../images/fb.png";
import github from "../images/github.png";
import tw from "../images/tw.png";
import insta from "../images/insta.png";

export default function Footer() {
  return (
    <footer>
      <img src={tw}></img>
      <img src={fb}></img>
      <img src={insta}></img>
      <img src={github}></img>
    </footer>
  );
}
