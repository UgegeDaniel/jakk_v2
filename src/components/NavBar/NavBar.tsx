import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './Sidebar';
import NavItems from './NavItems';
import NavBarText from './NavBarText';
import appLogo from '../../assets/images/jakkLogo.png';
import { User } from '../../types/stateTypes';

const NavBar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state) as User;
  const isSmallScreen = useMediaQuery({ query: '(max-width: 992px)' });

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    closeSidebar();
  }, []);

  return (
    <BootstrapNavbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img
            alt='logo'
            src={appLogo}
            className="rounded"
            style={{ width: '80px', height: 'auto' }} />
        </BootstrapNavbar.Brand>
        {user && <NavBarText handleToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />}
        {!isSmallScreen && user && (
          <Nav className="mr-0">
            <NavItems
              style={'flex-row align-items-center justify-content-center'}
              handleToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
          </Nav>
        )}
      </Container>
      {isSmallScreen && user &&
        <Sidebar
          handleToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
      }
    </BootstrapNavbar >
  );
};

export default NavBar;