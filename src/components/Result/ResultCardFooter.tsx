import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { showModal } from '../../redux-toolkit/features/questionSlice';
import React from 'react';

const ResultCardHeader: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center justify-content-between flex-fill my-1 mx-1">
      <Button txt="See Correction" variant="primary" onClick={() => dispatch(showModal(false))} />
      <Link to="/dashboard">
        <Button variant="primary" txt="Go To Dashboard" />
      </Link>
      <Link to="/testparams">
        <Button txt="Take Another Test" variant="outline-primary" />
      </Link>
    </div>
  );
};

export default ResultCardHeader;