import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accordion from '../../Accordion/Accordion';
import MockProviders from '../../_mocks/Providers';

describe('Accordion component', () => {
    it('renders the header correctly', () => {
        const headerTxt = 'Accordion Header';
        render(<MockProviders><Accordion headerTxt={headerTxt} eventKey="1">
            Accordion Body
        </Accordion></MockProviders>
        );
        const headerElement = screen.getByText(headerTxt);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders the body correctly', () => {
        const bodyTxt = 'Accordion Body';
        render(<MockProviders><Accordion headerTxt="Accordion Header" eventKey="1">
            {bodyTxt}
        </Accordion></MockProviders>
        );
        const bodyElement = screen.getByText(bodyTxt);
        expect(bodyElement).toBeInTheDocument();
    });
});
