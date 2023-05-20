import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import { navigations } from './navUtils';
import { signOut } from '../../redux-toolkit/features/userSlice';
import Btn from '../Btn/Btn';
import StateType from '../../types/stateTypes';

interface NavItemsProps {
  style: string;
  fontSize?: string;
}

const NavItems: React.FC<NavItemsProps> = ({ style, fontSize }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateType) => state);

  return (
    <Nav className={style}>
      {navigations.map((navItem, index) => (
        <NavItem
          key={index}
          link={navItem.link}
          Icon={navItem.Icon}
          linkTxt={navItem.linkTxt}
          fontSize={fontSize}
        />
      ))}
      {user && (
        <Btn
          txt="Sign Out"
          onClick={() => dispatch(signOut())}
        />
      )}
    </Nav>
  );
};

export default NavItems;
