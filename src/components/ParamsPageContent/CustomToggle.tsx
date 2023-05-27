import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { urls } from '../../utils/urls';
import { CustomToggleProps } from '../../types/propTypes';
import { setSubjectId } from '../../redux-toolkit/features/questionSlice';
import { getYearsForSubject } from '../../redux-toolkit/asyncMethods';
import { useDispatch, useSelector } from 'react-redux';
import StateType from '../../types/stateTypes';

const CustomToggle: React.FC<CustomToggleProps> = ({
  children, eventKey
}) => {
  const dispatch = useDispatch();
  const { testParams } = useSelector((state: StateType) => state);
  const { chosenSubject } = testParams;

  const handleClick = () => {
    dispatch(setSubjectId({ chosenSubject: children as string, chosenId: eventKey }));
    dispatch(getYearsForSubject(urls.getYearsForSubject(eventKey)) as unknown as AnyAction);
  };

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    handleClick(),
  );

  const chosenSubjectStyle = chosenSubject === children ? 'btn-primary' : 'btn-outline-primary';
  return (
    <button
      onClick={decoratedOnClick}
      className={`btn btn-block ${chosenSubjectStyle}`}
    >
      {children}
    </button>
  );
};

export default CustomToggle;