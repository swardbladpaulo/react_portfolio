/*Getting info from cv.json*/

import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import CvCard from './CvCard';
import axios from 'axios';

class Cv extends Component {
  state = {
    cv: [],
  };

  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ cv: response.data })
    });
  }

  render() {
    const { cv } = this.state;

    let cvList = cv.map((cv) => {
      return (
        <div id={`cv-${cv.id}`} key={cv.id}>
          <CvCard cv={cv} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">My Curriculum Vitae</h1>
          <br></br>
        <Grid>{cvList}</Grid>
      </Container>
    );
  };
};

export default Cv;