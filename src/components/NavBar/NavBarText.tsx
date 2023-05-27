import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';
import { TbMenu2 } from 'react-icons/tb';
import StateType from '../../types/stateTypes';
import { NavBarTextProps } from '../../types/propTypes';
import './Sidebar.css';

const NavBarText: React.FC<NavBarTextProps> = ({ handleToggleSidebar }) => {
  const { user } = useSelector((state: StateType) => state);
  const unVerifiedUser = user && !user.user.verified;
  return (
    <React.Fragment>
      <Navbar.Text> Signed in as:
        <span
          className="text-primary m-2">{user?.user.email}
        </span>
        {unVerifiedUser && <Link to='/verifyEmail'>
          <Button
            className="btn btn-sm btn-warning text-white m-2 d-block"> Verify Your Email
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