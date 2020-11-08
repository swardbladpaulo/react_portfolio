import React from "react";

const Hello = () => {
  return (
    <div className="hello" style={{background: 'url("./data/images/slussen.jpeg")', backgroundSize: 'cover', height: '120vh'}}>   
      <h1 id="hello">Welcome to my Portfolio</h1>
        <div className="hero-text">
          <h1>Paulo Swärdblad</h1>
          <h3> | Fullstack Webdeveloper Student | </h3>
            <div className="hello-item">
              <a className="ui primary button" id="button-left" href='/Projects'> Projects </a>
              <a className="ui button" href='/About'>Read More</a>
            </div>
        </div>
    </div>
  );
};

export default Hello;