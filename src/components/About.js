import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3><a href={props.github}>{props.github}</a></h3>
      <h3><a href={props.linkedin}>{props.linkedin}</a></h3>
      
    </div>
  );
}

export default About;
