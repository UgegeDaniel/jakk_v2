import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHistoryTable from './components/UserHistoryTable';
import Navbar from './components/Navbar'
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import { useSelector } from 'react-redux';

const breakPoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

function App() {
  const user = useSelector((state) => state.userState.user)

  return (
    <Router>
      <ThemeProvider
        breakpoints={breakPoints}
        minBreakpoint="xxs"
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={user ? <Dashboard/> : <Home/>}/>
        </Routes>
        {/* <Question/> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
