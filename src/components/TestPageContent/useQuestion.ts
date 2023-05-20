import { useSelector } from 'react-redux';
import StateType from '../../types/stateTypes';

const useQuestions = () => {
  const { isLoading, currentIndex, questions, answeredQuestions } = useSelector((state: StateType) => state);
  const options = [
    questions[currentIndex]?.optiona,
    questions[currentIndex]?.optionb,
    questions[currentIndex]?.optionc,
    questions[currentIndex]?.optiond,
    questions[currentIndex]?.optione
  ];

  return {
    isLoading,
    currentIndex,
    questions,
    options,
    id: questions[currentIndex]?.questions_uid,
    answer: questions[currentIndex]?.answer,
    userChoice: questions[currentIndex]?.userChoice,
    image: questions[currentIndex]?.image,
    length: questions.length,
    chosen: questions[currentIndex]?.userChoice ? true : false,
    answered: (index: number) => answeredQuestions.includes(index)
  };
};

export default useQuestions;
