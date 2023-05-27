import React from 'react';
import { render } from '@testing-library/react';
import AboutPageContent from '../AboutPageContent';
import { aboutTxt } from '../../../utils/txtUtils';

describe('AboutPageContent component', () => {
    it('renders the about text correctly', () => {
        const { getByText } = render(<AboutPageContent />);
        const aboutText = getByText(aboutTxt);
        expect(aboutText).toBeInTheDocument();
    });
});