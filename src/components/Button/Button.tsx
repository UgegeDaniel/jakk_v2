import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import Loader from '../Loaders/Loader';
import { ButtonProps } from '../../types/propTypes';

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, onClick, txt, style, variant, isLoading } = props;
  return (
    <BootstrapButton
      role="button"
      variant={variant || 'primary'}
      type="submit"
      className={`btn ${style || 'btn-sm'}`}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading && <Loader />}{txt}
    </BootstrapButton>
  );
};

export default Button;
