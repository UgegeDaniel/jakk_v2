import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import NavItem from './NavItem';
import Button from '../Button/Button';
import StateType from '../../types/stateTypes';
import { NavItemsProps } from '../../types/propTypes';
import { navigations } from './navUtils';
import { signOut } from '../../redux-toolkit/features/userSlice';

const NavItems: React.FC<NavItemsProps> = ({ style, fontSize, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateType) => state);

  return (
    <div className={`${style} justify-content-center align-items-center`}>
      {user?.user.verified && navigations.map((navItem, index) => (
        <NavItem
          key={index}
          link={navItem.link}
          Icon={navItem.Icon}
          linkTxt={navItem.linkTxt}
          fontSize={fontSize}
          handleToggleSidebar={handleToggleSidebar}
        />
      ))}
      <NavDropdown title="Pro Features" id="basic-nav-dropdown">
        <NavDropdown.Item>Join A Class</NavDropdown.Item>
      </NavDropdown>
      {user && (
        <Button
          txt="Sign Out"
          onClick={() => dispatch(signOut())}
        />
      )}
    </div>
  );
};

export default NavItems;
