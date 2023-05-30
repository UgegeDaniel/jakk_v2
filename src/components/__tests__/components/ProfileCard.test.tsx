import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../../Dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';
import MockProviders from '../../_mocks/Providers';

const mockState = {
    user: {
        user: {
            email: 'johnDoe@gmail.com',
            name: 'John Doe',
            verified: true
        },
    },
    userHistory: [],
};
describe('Profile Card component', () => {
    test('renders profile card with user information', () => {
        render(<MockProviders mockStore={mockState}><Dashboard /></MockProviders>);
        expect(screen.getByText(mockState.user.user.name)).toBeInTheDocument();
        expect(screen.getByText(mockState.user.user.email)).toBeInTheDocument();
    });
    // it('\'Take a test\' button routes user to test parameter page', () => {
    //     render(<MockProviders mockStore={mockState}><Dashboard /></MockProviders>);
    //     const buttonElement = screen.getByRole('button', { name: 'Take A Test' });
    //     const testParameterPageHeader = screen.getByText('Select Test Parameters');
    //     buttonElement.click();
    //     expect(testParameterPageHeader).toBeInTheDocument();
    // });
});