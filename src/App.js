import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarComponent, ToastNotification } from './components'
import {Home, About, Dashboard, TestPage, ErrorPage, TestParams} from './pages';
import { useSelector } from 'react-redux';
import './index.css';

const breakPoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

function App() {
  const user = useSelector((state) => state.userState.user)

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
          <Route path='/dashboard' element={user ? <Dashboard /> : <ErrorPage />} />
          <Route path='/testparams' element={user ? <TestParams /> : <ErrorPage />} />
          <Route path='/test' element={user ? <TestPage /> : <ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
