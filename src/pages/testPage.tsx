import React from 'react';
import { RxLapTimer } from 'react-icons/rx';
import { PageWrapper, Timer, TestPageContent } from '../components';
import { useSelector } from 'react-redux';
import { FaSpellCheck } from 'react-icons/fa';
import StateType from '../types/stateTypes';

const TestPage: React.FC = () => {
  const { testSubmitted } = useSelector((state: StateType) => state);

  if (testSubmitted) {
    return (
      <PageWrapper
        pageName="Correction"
        Icon={FaSpellCheck}
      >
        <TestPageContent />
      </PageWrapper>
    );
  }
  return (
    <PageWrapper
      pageName="Ongoing Test"
      Icon={RxLapTimer}
      FeatureBar={Timer}
    >
      <TestPageContent />
    </PageWrapper>
  );
};

export default TestPage;