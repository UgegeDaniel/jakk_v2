import { render, screen } from '@testing-library/react';
import Button from '../../Button/Button';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import MockProviders from '../../_mocks/Providers';


describe('Button component', () => {
    it('renders the button correctly', () => {
        const txt = 'Submit';
        render(<MockProviders mockStore={{ isLoading: false }}><Button onClick={() => { }} txt={txt} /></MockProviders>);
        const buttonElement = screen.getByText((content, element) => {
            return element?.textContent === content;
        });
        expect(buttonElement).toBeInTheDocument();
    });

    it('disables the button when loading', () => {
        const txt = 'Submit';
        const { getByRole } = render(<MockProviders mockStore={{ isLoading: true }}><Button onClick={() => { }} txt={txt} /></MockProviders>);
        const buttonElement = getByRole('button', { name: txt });
        const loaderElement = getByRole('status');
        expect(buttonElement).toBeDisabled();
        expect(loaderElement).toBeInTheDocument();
    });

    it('calls the onClick callback when clicked', () => {
        const onClick = jest.fn();
        const txt = 'Submit';
        const { getByRole } = render(<MockProviders mockStore={{ isLoading: false }}><Button onClick={onClick} txt={txt} /></MockProviders>);
        const buttonElement = getByRole('button', { name: txt });
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });
});
