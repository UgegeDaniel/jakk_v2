import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader: React.FC = () => {
  return (
    <Spinner as="span" animation="border" size="sm" role="status" className="mx-2" />
  );
};

export default Loader;
