import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { getUserHistory } from '../../redux-toolkit/asyncMethods';
import { ProfileCard, UserHistoryTable, UserStats } from '../DashboardComponent/index';
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import { urls } from '../../utils/urls';
import StateType from '../../types/stateTypes';
import { AnyAction } from '@reduxjs/toolkit';
import Chart from 'chart.js/auto';
import { ArcElement, CategoryScale } from 'chart.js';
Chart.register(ArcElement);
Chart.register(CategoryScale);

const DashboardComponent: React.FC = () => {
  const { user } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistory(urls.getUserHistory) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div>
      <ProfileCard user={user} />
      <Accordion>
        <AccordionComponent eventKey="0" headerTxt="Student History">
          <UserHistoryTable />
        </AccordionComponent>
        <AccordionComponent eventKey="1" headerTxt="Stats">
          <UserStats />
        </AccordionComponent>
      </Accordion>
    </div>
  );
};

export default DashboardComponent;
