import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ErrorPageContent: React.FC = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Sorry Route Not Found</Card.Title>
        <Card.Text>
          You have requested a route that does not exist.
          <Link to="/"><Button txt="Go Back Home" /></Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ErrorPageContent;
