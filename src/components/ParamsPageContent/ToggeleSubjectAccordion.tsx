import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import CustomToggle from './CustomToggle';
import { ToggleSubjectAccordionProps } from '../../types/propTypes';
import StateType from '../../types/stateTypes';

const ToggeleSubjectAccordion: React.FC<ToggleSubjectAccordionProps> = ({
  children, eventKey, headerTxt
}) => {
  const { testParams } = useSelector((state: StateType) => state);
  const { subjectId } = testParams;

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey={eventKey}>
            {headerTxt}
          </CustomToggle>
        </Card.Header>
        {(subjectId === eventKey) && <Accordion.Collapse eventKey={eventKey}>
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>}
      </Card>
    </Accordion>
  );
};

export default ToggeleSubjectAccordion;
