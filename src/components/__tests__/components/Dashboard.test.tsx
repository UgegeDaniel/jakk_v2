import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../../Dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';
import { getUserHistory } from '../../../redux-toolkit/asyncMethods';
import { urls } from '../../../utils/urls';
import MockProviders from '../../_mocks/Providers';
import { mockDispatch } from '../../_mocks/hooksMock';

const mockState = {
    user: {
        user: {
            email: 'johnDoe@gmail.com',
            name: 'John Doe',
            verified: true
        },
    },
    userHistory: [],
}

jest.mock('../../_mocks/hooksMock')
describe('Dashboard component', () => {
    beforeEach(() => {
        mockDispatch.mockImplementation((f: (arg0: any) => any) => f(mockState));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('renders the profile card and accordion correctly', () => {
        render(<MockProviders mockStore={mockState}><Dashboard /></MockProviders>);
        const userEmail = screen.getByText(mockState.user.user.email);
        const userName = screen.getByText(mockState.user.user.name);
        const studentHistoryAccordionElement = screen.getByText('Student History');
        const statsAccordionElement = screen.getByText('Stats');
        expect(userEmail).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
        expect(studentHistoryAccordionElement).toBeInTheDocument();
        expect(statsAccordionElement).toBeInTheDocument();
    });

    it('dispatches getUserHistory action on mount', async () => {
        render(<MockProviders mockStore={mockState}><Dashboard /></MockProviders>);
        await waitFor(() => {
            () => expect(mockDispatch).toHaveBeenCalledWith(getUserHistory(urls.getUserHistory));
        });
    });
    it('renders \'No user History to Display\' when user history is empty', () => {
        render(<MockProviders mockStore={{ ...mockState, userHistory: [] }}><Dashboard /></MockProviders>);
        const noUserHistoryTxt = screen.getAllByText('No user History to Display');
        expect(noUserHistoryTxt).toHaveLength(2);
    });
});
