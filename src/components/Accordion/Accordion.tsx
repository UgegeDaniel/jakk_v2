import React from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { AccordionProps } from '../../types/propTypes';

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, headerTxt, eventKey } = props;
  return (
    <BootstrapAccordion.Item eventKey={eventKey}>
      <BootstrapAccordion.Header>{headerTxt}</BootstrapAccordion.Header>
      <BootstrapAccordion.Body>{children}</BootstrapAccordion.Body>
    </BootstrapAccordion.Item>
  );
};

export default Accordion;
