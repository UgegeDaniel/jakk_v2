import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../NavBar/NavBar';
import '@testing-library/jest-dom/extend-expect';
import { mockDispatch, mockNavigate, mockUseForm, mockMediaQuery } from '../../_mocks/hooksMock';
import MockProviders from '../../_mocks/Providers';
import { mockState, unverifiedUser, verifiedUser } from '../../_mocks/mockStates';

jest.mock('../../_mocks/hooksMock');
describe('NavBar component', () => {
    beforeEach(() => {
        mockDispatch.mockImplementation((f: (arg0: any) => any) => f(mockState));
        mockNavigate.mockImplementation((f: (arg0: any) => any) => f(mockState));
        mockUseForm.mockImplementation((f: (arg0: any) => any) => f(mockState));
        mockMediaQuery.mockImplementation((f: (arg0: any) => any) => f(mockState));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders logo correctly', async () => {
        render(<MockProviders mockStore={mockState}><NavBar /></MockProviders>);
        const logo = screen.getByAltText('logo')
        expect(logo).toBeInTheDocument();
    });

    it('does not render nav items with for unsigned in user', async () => {
        render(<MockProviders mockStore={mockState}><NavBar /></MockProviders>);
        const takeATestBtn = screen.queryByText('Take A Text');
        expect(takeATestBtn).not.toBeInTheDocument();
    });

    it('render verify email btn for unverified user', async () => {
        render(<MockProviders mockStore={{ ...mockState, user: unverifiedUser }}><NavBar /></MockProviders>);
        const verifyEmailBtn = screen.getByRole('button', { name: 'Verify Your Email' });
        const userEmail = screen.getByText(unverifiedUser.user.email);
        expect(verifyEmailBtn).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
    });

    it('render nav items if user is verified', async () => {
        render(<MockProviders mockStore={{ ...mockState, user: verifiedUser }}><NavBar /></MockProviders>);
        const takeATestBtn = screen.getByText('Home');
        const userEmail = screen.getByText(verifiedUser.user.email);
        expect(takeATestBtn).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
    });
});
