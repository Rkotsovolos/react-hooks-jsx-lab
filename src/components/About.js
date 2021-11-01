import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id = 'about'>About
    <h2>About Me</h2>
    <p>React is starting to become my favorite!</p>
    <img src = {image} alt = "I made this"></img>
  </div>
  );
}

export default About;
