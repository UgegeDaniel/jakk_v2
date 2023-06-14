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
    <div className={`${style}`}>
      {user?.user.verified && navigations.map((navItem, index) => {
        if (Array.isArray(navItem)) {
          return (<NavDropdown title="App Features" style={{ display: 'inline-block' }}>
            {navItem.map((dropdownItem) => <NavDropdown.Item bg="dark">
              <NavItem
                key={index}
                link={dropdownItem.link}
                Icon={dropdownItem.Icon}
                linkTxt={dropdownItem.linkTxt}
                fontSize={fontSize}
                handleToggleSidebar={handleToggleSidebar}
                dropDown={true}
              />
            </NavDropdown.Item>
            )}
          </NavDropdown>
          );
        }
        if (!Array.isArray(navItem)) return (<NavItem
          key={index}
          link={navItem.link}
          Icon={navItem.Icon}
          linkTxt={navItem.linkTxt}
          fontSize={fontSize}
          handleToggleSidebar={handleToggleSidebar}
        />);
      })}
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
