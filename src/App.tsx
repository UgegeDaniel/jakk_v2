import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarComponent, ToastNotification } from './components';
import { Home, About, Dashboard, TestPage, ErrorPage, TestParams } from './pages';
import './index.css';
import { useSelector } from 'react-redux';

const breakPoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

type User = {
  success: boolean;
  user: {
    email: string,
    name: string
  }
}

function App() {
  const { user } = useSelector((state) => state) as User;

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
          <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/" />} />
          <Route path='/testparams' element={user ? <TestParams /> : <Navigate to="/" />} />
          <Route path='/test' element={user ? <TestPage /> : <Navigate to="/" />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
