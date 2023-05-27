import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { ArcElement, CategoryScale, Chart } from 'chart.js';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { getUserHistory } from '../../redux-toolkit/asyncMethods';
import { ProfileCard, UserHistoryTable, UserStats } from '../Dashboard/index';
import Accordion from '../Accordion/Accordion';
import { urls } from '../../utils/urls';
import StateType from '../../types/stateTypes';
Chart.register(ArcElement);
Chart.register(CategoryScale);

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistory(urls.getUserHistory) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div>
      <ProfileCard user={user} />
      <BootstrapAccordion>
        <Accordion eventKey="0" headerTxt="Student History">
          <UserHistoryTable />
        </Accordion>
        <Accordion eventKey="1" headerTxt="Stats">
          <UserStats />
        </Accordion>
      </BootstrapAccordion>
    </div>
  );
};

export default Dashboard;
