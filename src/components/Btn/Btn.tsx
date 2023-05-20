import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../Loaders/Loader';
import StateType from '../../types/stateTypes';

interface BtnProps {
  disabled?: boolean;
  onClick?: () => void;
  txt: string;
  size?: string;
  variant?: string;
}

const Btn: React.FC<BtnProps> = ({ disabled, onClick, txt, size, variant }) => {
  const { isLoading } = useSelector((state: StateType) => state);

  return (
    <Button
      variant={variant || "primary"}
      type="submit"
      className={`btn ${size || 'btn-sm'}`}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading && <Loader className="px-2" />}{txt}
    </Button>
  );
}

export default Btn;
