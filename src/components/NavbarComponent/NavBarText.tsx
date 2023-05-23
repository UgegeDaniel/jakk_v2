import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom'
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
        {unVerifiedUser && <Link to='/verifyEmail'>
          <Button
            className="btn btn-dm btn-danger m-2 d-block"> Verify Your Email
          </Button>
        </Link>
        }
      </Navbar.Text>
      <Navbar.Toggle onClick={handleToggleSidebar}>
        <TbMenu2 />
      </Navbar.Toggle>
    </React.Fragment>
  );
};

export default NavBarText;