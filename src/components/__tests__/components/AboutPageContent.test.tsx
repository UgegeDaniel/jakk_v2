import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutPageContent from '../../AboutPageContent/AboutPageContent';
import { aboutTxt } from '../../../utils/txtUtils';
import MockProviders from '../../_mocks/Providers';

describe('AboutPageContent component', () => {
    it('renders the about text correctly', () => {
        const { getByText } = render(<MockProviders><AboutPageContent /></MockProviders>);
        const aboutText = getByText(aboutTxt);
        expect(aboutText).toBeInTheDocument();
    });
});