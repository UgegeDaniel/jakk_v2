import React, { ReactNode } from 'react';
import { Accordion } from 'react-bootstrap';

interface AccordionComponentProps {
  children: ReactNode;
  headerTxt: string;
  eventKey: string;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  children,
  headerTxt,
  eventKey,
}) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{headerTxt}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionComponent;
