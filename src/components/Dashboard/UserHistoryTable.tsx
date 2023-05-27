import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, milliSecsToMoment } from '../../utils';
import TableBody from './TableBody';
import StateType from '../../types/stateTypes';

const NoUserHistory = () => <p className="lead text-secondary">No user History to Display</p>;
const TableHeaderItem: React.FC<{ item: string | number }> = ({ item }) => <th>{item}</th>;

const UserHistoryTable = () => {
  const { userHistory } = useSelector((state: StateType) => state);
  if (userHistory?.length === 0) return <NoUserHistory />;
  const formatedHistory = userHistory.map((historyItem) => ({
    ...historyItem,
    subject: capitalizeFirstLetter(historyItem?.subject),
    timeOfTest: milliSecsToMoment(historyItem.timeOfTest),
    score: Number(historyItem.score)
  }));
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {['#', 'Subject', 'Year', 'Time', 'Score'].map((item, index) => (
              <TableHeaderItem key={index} item={item} />
            ))}
          </tr>
        </thead>
        <TableBody formatedHistory={formatedHistory}/>
      </table>
    </div>
  );
};

export default UserHistoryTable;
