import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { pieData, barData, barOptions, pieOptions } from './chartUtils';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ChartData } from 'chart.js';
import StateType from '../../types/stateTypes';
import 'chart.js';
import 'chartjs-adapter-date-fns';
import 'react-chartjs-2';

const UserStats: React.FC = () => {
  const { userHistory } = useSelector((state: StateType) => state);

  if (!userHistory || userHistory?.length === 0)
    return <p className="lead text-secondary">No User History to Display</p>;

  const pieChartDataToDisplay = pieData(userHistory);
  const barChartDataToDisplay = barData(userHistory);

  return (
    <Row>
      <Col md={3} className="border border-secondary">
        <Pie
          data={pieChartDataToDisplay as ChartData<'pie', number[], unknown>}
          options={pieOptions}
          className="mh-100"
        />
      </Col>
      <Col md={9} className="border border-secondary">
        <Bar
          data={barChartDataToDisplay as ChartData<'bar', number[], unknown>}
          options={barOptions}
          className="w-100"
          style={{ minHeight: '200px' }}
        />
      </Col>
    </Row>
  );
};

export default UserStats;
