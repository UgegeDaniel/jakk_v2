import React from 'react';
import { render } from '@testing-library/react';
import CarouselText from '../../Carousel/CarouselText';
import '@testing-library/jest-dom/extend-expect';
import MockProviders from '../../_mocks/Providers';
import MockReactIcon from '../../_mocks/MockIcon';

describe('CarouselText component', () => {
    it('renders the content correctly', () => {
        const content = {
            Icon: MockReactIcon,
            headerTxt: 'Header Text',
            body: 'Body Text',
        };

        const { getByText, getByRole } = render(<MockProviders><CarouselText content={content} /></MockProviders>);

        const iconElement = getByRole('presentation');
        const headerTextElement = getByText('Header Text');
        const bodyTextElement = getByText('Body Text');

        expect(iconElement).toBeInTheDocument();
        expect(headerTextElement).toBeInTheDocument();
        expect(bodyTextElement).toBeInTheDocument();
    });
});
