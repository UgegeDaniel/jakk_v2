import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader';
import StateType from '../../types/stateTypes';
import { ButtonProps } from '../../types/propTypes';

const Button: React.FC<ButtonProps> = (props) => {
  const { isLoading } = useSelector((state: StateType) => state);
  const { disabled, onClick, txt, style, variant } = props;
  return (
    <BootstrapButton
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
