import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { capitalizeFirstLetter } from '../../utils';
import StateType from '../../types/stateTypes';

interface QuestionHeaderProps {
  userChoice?: string;
  examtype: string;
  section: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ userChoice, examtype, section }) => {
  const { testParams, currentIndex } = useSelector((state: StateType) => state);
  const { chosenSubject, chosenYear } = testParams;
  const numberStyle = userChoice ? 'bg-primary text-white' : 'bg-white text-primary';

  return (
    <React.Fragment>
      <Card.Title className="d-flex justify-content-between fst-italic">
        <small className={`text-start p-2 rounded-circle border border-primary ${numberStyle}`}>
          {currentIndex + 1} .
        </small>
        <small className="text-end fs-6 text-primary">
          {examtype.toUpperCase()} {chosenSubject} {chosenYear}
        </small>
      </Card.Title>
      <small className="text-center text-secondary text-muted fs-6 mb-2">
        {parse(`${capitalizeFirstLetter(section)}`)}
      </small>
    </React.Fragment>
  );
};

export default QuestionHeader;
