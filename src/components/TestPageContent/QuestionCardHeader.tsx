import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { capitalizeFirstLetter } from '../../utils';
import StateType from '../../types/stateTypes';
import { QuestionHeaderProps } from '../../types/propTypes';
import styles from '../../styles';

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ userChoice, examtype, section }) => {
  const { testParams, currentIndex } = useSelector((state: StateType) => state);
  const { chosenSubject, chosenYear } = testParams;
  const numberStyle = userChoice ? 'bg-primary text-white' : 'bg-white text-primary';

  return (
    <React.Fragment>
      <Card.Title className={styles.questionTitle}>
        <small className={`${styles.questionNumStyle} ${numberStyle}`}>
          {currentIndex + 1} .
        </small>
        <small className={styles.questionTypeStyle}>
          {examtype.toUpperCase()} {chosenSubject} {chosenYear}
        </small>
      </Card.Title>
      <small className={styles.questionStyle}>
        {parse(`${capitalizeFirstLetter(section)}`)}
      </small>
    </React.Fragment>
  );
};

export default QuestionHeader;
