// Accordion.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from '../Accordion';

describe('Accordion component', () => {
    it('renders the header correctly', () => {
        const headerTxt = 'Accordion Header';
        render(
            <Accordion headerTxt={headerTxt} eventKey="1">
                Accordion Body
            </Accordion>
        );
        const headerElement = screen.getByText(headerTxt);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders the body correctly', () => {
        const bodyTxt = 'Accordion Body';
        render(
            <Accordion headerTxt="Accordion Header" eventKey="1">
                {bodyTxt}
            </Accordion>
        );
        const bodyElement = screen.getByText(bodyTxt);
        expect(bodyElement).toBeInTheDocument();
    });
});
