import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Form from '../../Form/Form';
import '@testing-library/jest-dom/extend-expect';
import { signUpUser } from '../../../redux-toolkit/asyncMethods';
import { mockDispatch, mockNavigate, mockUseForm } from '../../_mocks/hooksMock';
import MockProviders from '../../_mocks/Providers';
import user from '@testing-library/user-event';
import { mockStateWFormData } from '../../_mocks/mockStates';

jest.mock('../../_mocks/hooksMock');
describe('Form component', () => {
    beforeEach(() => {
        mockDispatch.mockImplementation((f: (arg0: any) => any) => f(mockStateWFormData));
        mockNavigate.mockImplementation((f: (arg0: any) => any) => f(mockStateWFormData));
        mockUseForm.mockImplementation((f: (arg0: any) => any) => f(mockStateWFormData));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('dispatches submit handler action on form submit', async () => {
        user.setup();
        render(<MockProviders mockStore={mockStateWFormData}><Form /></MockProviders>);
        const submitButton = screen.getByRole('button', { name: 'Sign Up' })
        user.click(submitButton);
        const signInParams = {
            endpoint: '/users/signup',
            extract: 'user',
            navParams: { navPath: '/', navFunc: mockNavigate },
        }
        await waitFor(() => {
            () => expect(mockDispatch).toHaveBeenCalledWith(signUpUser(signInParams));
            () => expect(mockUseForm.formik.handleSubmit).toHaveBeenCalled();
        });
    });

    it('does not dispatches submit handler action on form submit', async () => {
        user.setup();
        render(<MockProviders mockStore={{...mockStateWFormData, name: 'Test'}}><Form /></MockProviders>);
        const submitButton = screen.getByRole('button', { name: 'Sign Up' })
        user.click(submitButton);
        const signInParams = {
            endpoint: '/users/signup',
            extract: 'user',
            navParams: { navPath: '/', navFunc: mockNavigate },
        }
        await waitFor(() => {
            () => expect(mockDispatch).toNotHaveBeenCalledWith(signUpUser(signInParams));
            () => expect(mockUseForm.formik.handleSubmit).toNotHaveBeenCalled();
        });
    });
});
