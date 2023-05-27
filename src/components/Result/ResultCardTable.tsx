import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import useQuestions from '../TestPageContent/useQuestion';
import StateType from '../../types/stateTypes';
import { resultTableHeaders, tableContent } from '../TestPageContent/testPageUtils';

const ResultCardTable: React.FC = () => {
  const { result, testParams } = useSelector((state: StateType) => state);
  const { length } = useQuestions();
  const resultTableContent = tableContent(testParams, result, length);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {resultTableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>{resultTableContent.map((content, index) => <td key={index}> {content}</td>)}</tr>
      </tbody>
    </Table>
  );
};

export default ResultCardTable;