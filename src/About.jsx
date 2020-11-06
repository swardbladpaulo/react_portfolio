import React from 'react';
import { Container } from 'semantic-ui-react';

const About = () => {
  return (
    <Container >
      <h1 id="about-header">About Me</h1>
      
      <h3 className="ui dividing header">General</h3>
      <div className="ui stackable four column grid">
        <div className="column">Column 1</div>
        <div className="column">Column 2</div>
        <div className="column">Column 3</div>
        <div className="column">Column 4</div>
      </div>

      <h3 className="ui dividing header">B</h3>
      <div className="ui internally celled grid">
        <div className="row">

          <div className="three wide column">
            <img src="./data/images/bmicalc.png"></img>
          </div>
            
          <div className="ten wide column">
            <p>Add text 1</p>
            <p>Add text 2</p>
            </div>
            
          <div className="three wide column">
            <img src="./data/images/fizzbuzz.png"></img>
          </div>
          
          <h3 className="ui dividing header">C</h3>
            
        </div>
      </div>
    </Container>
  );
};


export default About;