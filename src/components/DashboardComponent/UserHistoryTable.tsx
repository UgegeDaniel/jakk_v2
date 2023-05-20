import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, milliSecsToMoment } from '../../utils';
import StateType from '../../types/stateTypes';

const UserHistoryTable = () => {
  const { userHistory } = useSelector((state: StateType) => state);
  if (!userHistory || userHistory?.length === 0) return <p className="lead text-secondary">No user History to Display</p>;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Year</th>
            <th>Time</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {userHistory?.map((historyItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{capitalizeFirstLetter(historyItem?.name)}</td>
              <td>{capitalizeFirstLetter(historyItem?.year)}</td>
              <td>{milliSecsToMoment(historyItem.time_of_test)}</td>
              <td>
                {Number(historyItem.score)}%
                <ProgressBar
                  variant="gradient-success"
                  now={Number(historyItem.score)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserHistoryTable;
