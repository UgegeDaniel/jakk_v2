import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js';
// import 'chartjs-adapter-date-fns';
import 'react-chartjs-2';
import { pieData, barData, barOptions, pieOptions } from './chartUtils';
import { ChartData } from 'chart.js';
import StateType from '../../types/stateTypes';

const NoUserHistory = () => <p className="lead text-secondary">No user History to Display</p>;

const UserStats: React.FC = () => {
  const { userHistory } = useSelector((state: StateType) => state);

  if (userHistory?.length === 0) return <NoUserHistory />;

  const pieChartDataToDisplay = pieData(userHistory) as ChartData<'pie', number[], unknown>;
  const barChartDataToDisplay = barData(userHistory) as ChartData<'bar', number[], unknown>;

  return (
    <Row>
      <Col md={3} className="border border-secondary">
        <Pie
          data={pieChartDataToDisplay}
          options={pieOptions}
          className="mh-100"
        />
      </Col>
      <Col md={9} className="border border-secondary">
        <Bar
          data={barChartDataToDisplay}
          options={barOptions}
          className="w-100"
          style={{ minHeight: '200px' }}
        />
      </Col>
    </Row>
  );
};

export default UserStats;
