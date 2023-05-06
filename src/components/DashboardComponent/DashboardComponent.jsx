import { Accordion } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHistory } from '../../redux-toolkit/features/userSlice';
import { useEffect } from 'react';
import ProfileCard from './ProfileCard';
import UserHistoryTable from './UserHistoryTable';
import UserStats from './UserStats';
import AccordionComponent from '../AccordionComponent/AccordionComponent';

const DashboardComponent = () => {
  const user = useSelector((state) => state.userState.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserHistory({ endpoint: '/users/history', extract: 'userHistory' }));
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