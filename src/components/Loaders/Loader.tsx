import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoaderProps {
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <Spinner as="span" animation="border" size="sm" role="status" className={className} />
  );
};

export default Loader;
