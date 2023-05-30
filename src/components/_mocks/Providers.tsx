import { AnyAction, Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createMockedStore from '../_testUtils/testUtils';

const MockProviders: React.FC<{
    children: React.ReactNode, mockStore?: {},
}> = ({ children, mockStore }) => {
    if (!mockStore) return <BrowserRouter>{children}</BrowserRouter>
    return (
        <Provider store={createMockedStore(mockStore)}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
};

export default MockProviders;
