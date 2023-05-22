import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarComponent, ToastNotification } from './components';
import { Home, About, Dashboard, TestPage, ErrorPage, TestParams, EmailVerification, UnVerifiedUser } from './pages';
import './index.css';
import { useSelector } from 'react-redux';
import { User } from './types/stateTypes';

const breakPoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

function App() {
  const { user } = useSelector((state) => state) as User;
  const verifiedUser = user && user.user.verified;
  const unVerifiedUser = user && !user.user.verified;
  return (
    <Router>
      <ThemeProvider
        breakpoints={breakPoints}
        minBreakpoint="xxs"
      >
        <NavbarComponent />
        <ToastNotification />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={verifiedUser ? <Dashboard /> : <Navigate to="/" />} />
          <Route path='/testparams' element={verifiedUser ? <TestParams /> : <Navigate to="/" />} />
          <Route path='/test' element={verifiedUser ? <TestPage /> : <Navigate to="/" />} />
          <Route path='/verifyEmail' element={unVerifiedUser ? <UnVerifiedUser /> : <Navigate to="/" />} />
          <Route path='/verifyEmail/:ref' element={unVerifiedUser ? <EmailVerification /> : <Navigate to="/" />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
