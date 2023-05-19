import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { getUserHistory } from '../../redux-toolkit/asyncMethods';
import { ProfileCard, UserHistoryTable, UserStats } from '../DashboardComponent/index';
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import { urls } from '../../utils';

const DashboardComponent = () => {
  const { user } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserHistory(urls.getUserHistory));
  }, [dispatch])
  return (
    <div>
      <ProfileCard user={user} />
      <Accordion>
        <AccordionComponent
          eventKey="0"
          headerTxt="Student History"
        >
          <UserHistoryTable />
        </AccordionComponent>
        <AccordionComponent
          eventKey="1"
          headerTxt="Stats"
        >
          <UserStats />
        </AccordionComponent>
      </Accordion>
    </div>
  );
}

export default DashboardComponent;