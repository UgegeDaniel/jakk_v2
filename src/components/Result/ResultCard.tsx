import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCheckDouble } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import ResultCardFooter from './ResultCardFooter';
import ResultCardTable from './ResultCardTable';
import StateType from '../../types/stateTypes';
import styles from '../../styles';

const ResultCard: React.FC = () => {
  const { result } = useSelector((state: StateType) => state);

  return (
    <Card style={{ width: '100%' }}>
      <div className={styles.flexFill}>
        <BiCheckDouble className={styles.scoreIconStyle} />
        <span className={styles.scoreStyle}>
          {result.score}%
        </span>
      </div>
      <Card.Body>
        <ResultCardTable />
        <ResultCardFooter />
      </Card.Body>
    </Card>
  );
};

export default ResultCard;
