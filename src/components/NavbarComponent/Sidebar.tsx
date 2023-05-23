import React from 'react';
import { Container } from 'react-bootstrap';
import './Sidebar.css';
import NavItems from './NavItems';
import { FaTimes } from 'react-icons/fa';

interface SideBarProps {
  handleToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SideBarProps> = ({ sidebarOpen, handleToggleSidebar }) => {
  return (
    <Container
      fluid
      className={`sidebar ${sidebarOpen ? 'open' : ''} bg-dark d-flex align-items-center justify-content-center`}>
      <FaTimes
        className="text-danger border border-danger rounded nav-icon fs-1 p-2 font-weight-bold"
        onClick={handleToggleSidebar}
      />
      <NavItems
        style={'flex-column align-items-start justify-content-center'}
        fontSize="fs-6"
        handleToggleSidebar={handleToggleSidebar}
      />
    </Container>
  );
};

export default Sidebar;
