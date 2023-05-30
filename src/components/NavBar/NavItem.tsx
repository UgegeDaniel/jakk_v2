import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavItemProps } from '../../types/propTypes';

const NavItem: React.FC<NavItemProps> = (props) => {
  const { link, Icon, linkTxt, fontSize, handleToggleSidebar } = props;
  const location = useLocation();
  const isCuurentPage = link === location.pathname;
  const currentLinkStyle = isCuurentPage
    ? 'border rounded border-primary text-primary'
    : 'text-white';
  const currentLinkTxtStyle = isCuurentPage ? 'text-primary' : 'text-white';

  return (
    <span
      className={`mr-2 mb-3 ${fontSize} ${currentLinkStyle} p-2`}
      onClick={handleToggleSidebar}
    >
      <Link to={link}
        className={`mr-2 font-weight-bold text-white ${currentLinkTxtStyle}`}
        style={{
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        <Icon className="mx-1" />{linkTxt}</Link>
    </span>
  );
};

export default NavItem;
