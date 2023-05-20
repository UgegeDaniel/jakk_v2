import React from 'react';
import Option from './Option';
import styles from '../../styles';
import useQuestions from './useQuestion';

const Options: React.FC = () => {
  const { options } = useQuestions();

  return (
    <div className={`${styles.optionWrapper}`}>
      {options.map((option, index) => (
        <Option key={index} option={option} index={index} />
      ))}
    </div>
  );
};

export default Options;
