import React from 'react';
import { Container } from 'react-bootstrap';
import './Sidebar.css';
import NavItems from './NavItems';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles';
import { SideBarProps } from '../../types/propTypes';

const Sidebar: React.FC<SideBarProps> = ({ sidebarOpen, handleToggleSidebar }) => {
  const sidebarStyle = `sidebar ${sidebarOpen ? 'open' : ''} bg-dark ${styles.flex}`;
  return (
    <Container
      fluid
      className={sidebarStyle}>
      <FaTimes
        className={styles.redBtn}
        onClick={handleToggleSidebar}
      />
      <NavItems
        style={'d-flex flex-column'}
        fontSize="fs-6"
        handleToggleSidebar={handleToggleSidebar}
      />
    </Container>
  );
};

export default Sidebar;
