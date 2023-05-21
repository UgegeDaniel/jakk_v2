import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import './Sidebar.css';
import NavItems from './NavItems';
import { useSelector } from 'react-redux';
import StateType from '../../types/stateTypes';
import { TbMenu2 } from 'react-icons/tb';
import { FaTimes } from 'react-icons/fa';
import appLogo from '../../assets/images/jakkLogo.png';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state: StateType) => state);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 992px)' });

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={appLogo}
            className="rounded"
            style={{ width: '80px', height: 'auto' }} />
        </Navbar.Brand>
        {user && (
          <React.Fragment>
            <Navbar.Text>
              Signed in as:
              <span
                className="text-primary">{user.user?.email}
              </span>
            </Navbar.Text>
            <Navbar.Toggle onClick={handleToggleSidebar}>
              <TbMenu2 />
            </Navbar.Toggle>
          </React.Fragment>
        )}
        {user && !isSmallScreen && (
          <Nav className="mr-0">
            <NavItems style={'flex-row align-items-center justify-content-center'} />
          </Nav>
        )}
      </Container>
      {user && isSmallScreen && (
        <Container
          fluid
          className={`sidebar ${sidebarOpen ? 'open' : ''} bg-dark d-flex align-items-center justify-content-center`}>
          <FaTimes
            className="text-danger border border-danger rounded nav-icon fs-1 p-2 font-weight-bold"
            onClick={handleToggleSidebar}
          />
          <NavItems
            style={'flex-column align-items-start justify-content-center'}
            fontSize="fs-6" />
        </Container>
      )}
    </Navbar>
  );
};

export default Sidebar;
