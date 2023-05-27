import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Button from '../Button';
import createMockedStore from '../../../utils/testUtils';

jest.mock('react-redux');

describe('Button component', () => {
    it('renders the button correctly', () => {
        const onClick = jest.fn();
        const txt = 'Submit';
        render(<Button onClick={onClick} txt={txt} />);
        const buttonElement = screen.getByRole('button', { name: txt });
        expect(buttonElement).toBeInTheDocument();
    });

    it('disables the button when loading', () => {
        const onClick = jest.fn();
        const txt = 'Submit';
        render(
            <Provider store={createMockedStore({ loading: true })}>
                <Button onClick={onClick} txt={txt} />
            </Provider>
        );
        const buttonElement = screen.getByRole('button', { name: txt });
        expect(buttonElement).toBeDisabled();
    });

    it('calls the onClick callback when clicked', () => {
        const onClick = jest.fn();
        const txt = 'Submit';
        render(<Button onClick={onClick} txt={txt} />);
        const buttonElement = screen.getByRole('button', { name: txt });
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });
});
