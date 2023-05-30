import React from 'react';
import { render, screen } from '@testing-library/react';
import UserHistoryTable from '../../Dashboard/UserHistoryTable';
import '@testing-library/jest-dom/extend-expect';
import { mockDispatch } from '../../_mocks/hooksMock';
import MockProviders from '../../_mocks/Providers';

const userHistory = [
    {
        subject: 'math',
        year: 2021,
        timeOfTest: 1622217600000,
        score: '90',
    },
    {
        subject: 'english',
        year: 2022,
        timeOfTest: 1653753600000,
        score: '85',
    },
];

const mockState = {
    user: {
        user: {
            email: 'johnDoe@gmail.com',
            name: 'John Doe',
            verified: true
        },
    },
}

jest.mock('../../_mocks/hooksMock');
describe('Dashboard component', () => {
    beforeEach(() => {
        mockDispatch.mockImplementation((f: (arg0: any) => any) => f(mockState));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('renders user history table with formatted data', () => {
        const { getByText } = render(<MockProviders mockStore={{...mockState, userHistory}}><UserHistoryTable /></MockProviders>);
        expect(getByText('#')).toBeInTheDocument();
        expect(getByText('Subject')).toBeInTheDocument();
        expect(getByText('Year')).toBeInTheDocument();
        expect(getByText('Time')).toBeInTheDocument();
        expect(getByText('Score')).toBeInTheDocument();
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('Math')).toBeInTheDocument();
        expect(getByText('2021')).toBeInTheDocument();
        expect(getByText('Fri, May 28, 2021 5:00 PM')).toBeInTheDocument();
        expect(getByText('90%')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('English')).toBeInTheDocument();
        expect(getByText('2022')).toBeInTheDocument();
        expect(getByText('Sat, May 28, 2022 5:00 PM')).toBeInTheDocument();
        expect(getByText('85%')).toBeInTheDocument();
    });

    it('renders \'No user History to Display\' when user history is empty', () => {
        render(<MockProviders mockStore={{...mockState, userHistory: []}}><UserHistoryTable /></MockProviders>);
        const noUserHistoryTxt = screen.getByText('No user History to Display');
        expect(noUserHistoryTxt).toBeInTheDocument();
    });
})
