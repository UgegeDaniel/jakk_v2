import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavItems from './NavItems';
import appLogo from '../../assets/images/jakkLogo.png';
import NavBarText from './NavBarText';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { User } from '../../types/stateTypes';

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state) as User;
  const isSmallScreen = useMediaQuery({ query: '(max-width: 992px)' });

  const handleToggleSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    handleToggleSidebar();
  }, []);

  console.log({ sidebarOpen });
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={appLogo}
            className="rounded"
            style={{ width: '80px', height: 'auto' }} />
        </Navbar.Brand>
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
    </Navbar >
  );
};

export default NavbarComponent;