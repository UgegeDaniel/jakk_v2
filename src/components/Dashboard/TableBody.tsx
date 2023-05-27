import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { UserHistory } from '../../types/stateTypes';

const TableBodyItem: React.FC<{ item: string | number }> = ({ item }) => <td>{item}</td>;

const TableBody: React.FC<{ formatedHistory: UserHistory[] }> = (
  { formatedHistory }
) => (
  <tbody>
    {formatedHistory?.map((historyItem, index) => {
      const { subject, year, timeOfTest, score } = historyItem;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <TableBodyItem item={subject} />
          <TableBodyItem item={year} />
          <TableBodyItem item={timeOfTest} />
          <td>{score}%
            <ProgressBar
              variant="gradient-success"
              now={score}
            />
          </td>
        </tr>
      );
    })}
  </tbody>
);

export default TableBody;


