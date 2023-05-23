import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import StateType from '../../types/stateTypes';
import { TbMenu2 } from 'react-icons/tb';

interface NavBarTextProps {
    handleToggleSidebar: () => void;
}

const NavBarText: React.FC<NavBarTextProps> = ({ handleToggleSidebar }) => {
  const { user } = useSelector((state: StateType) => state);
  const unVerifiedUser = user && !user.user.verified;
  return (
    <React.Fragment>
      <Navbar.Text> Signed in as:
        <span
          className="text-primary">{user?.user.email}
        </span>
        {unVerifiedUser && <span
          className="text-danger m-2 d-block"> Please Verify Your Email
        </span>
        }
      </Navbar.Text>
      <Navbar.Toggle onClick={handleToggleSidebar}>
        <TbMenu2 />
      </Navbar.Toggle>
    </React.Fragment>
  );
};

export default NavBarText;