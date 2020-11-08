import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CvCard = ({ cv }) => {
  return (
    <Card id="cvcard">
      <Image src={cv.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cv.name}</Card.Header>
        <Card.Description>{cv.title}</Card.Description>
        <Card.Description>{cv.timeline}</Card.Description>
        <Card.Description>{cv.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CvCard;