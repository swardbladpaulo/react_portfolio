import React from 'react';
import { Container } from 'semantic-ui-react';

const About = () => {
  return (
    <Container >
      <h1 id="about-header">About Me</h1>
      
      <h3 className="ui dividing header">Contact</h3>
      <div className="ui stackable four column grid">
        <div className="column">
          <h3>Paulo Swärdblad</h3>
          <p>Tel: +46 (0) 777 - 123 123 22</p>
          <p>Email: email@email.com</p>
        </div>

        <div className="column"></div>

        <div className="column">
          <p></p>
          <p></p>
        </div>
        
        <div className="column">
          <img src="./data/images/devpuzzle.jpeg" alt="puzzle"></img>
        </div>
      </div>

      <h3 className="ui dividing header">General</h3>
      <div className="ui internally celled grid">
        <div className="row">

          <div className="three wide column">
            <img src="./data/images/IMG_6523.jpeg" alt="me"></img>
          </div>
            
          <div className="ten wide column">
            <p>Im a awesome dude who likes fast cars, motorcycles and helicopters.</p>
            <p>I live in the beautiful capital of Sweden, Stockholm.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;