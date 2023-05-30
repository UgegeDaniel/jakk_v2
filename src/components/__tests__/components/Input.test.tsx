import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Input from '../../Form/Input';
import '@testing-library/jest-dom/extend-expect';
import { mockDispatch, mockNavigate, mockUseForm } from '../../_mocks/hooksMock';
import MockProviders from '../../_mocks/Providers';
import { mockStateType } from '../../../types/utilityTypes';
import user from '@testing-library/user-event';
import { mockStateNoFormdata } from '../../_mocks/mockStates';

jest.mock('../../_mocks/hooksMock');
describe('Input component', () => {
    beforeEach(() => {
        mockDispatch.mockImplementation((f: (arg0: mockStateType) => any) => f(mockStateNoFormdata));
        mockNavigate.mockImplementation((f: (arg0: mockStateType) => any) => f(mockStateNoFormdata));
        mockUseForm.mockImplementation((f: (arg0: mockStateType) => any) => f(mockStateNoFormdata));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders input component with formik integration', async () => {
        user.setup();
        render(<MockProviders mockStore={mockStateNoFormdata}><Input formik={{...mockUseForm.formik, handleChange: jest.fn()}} type="text" name="name" /></MockProviders>);
        const inputElement = screen.getByLabelText(/Name/i) as HTMLInputElement;
        user.type(inputElement, 'Jane');
        await waitFor(() => {
            () => expect(mockUseForm.formik.handleChange).toHaveBeenCalled();
        });
        () => expect(inputElement).toHaveValue('Jane');
    });
});
