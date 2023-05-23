import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';

interface NavItemProps {
  link: string;
  Icon: IconType;
  linkTxt: string;
  fontSize?: string;
  handleToggleSidebar: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ link, Icon, linkTxt, fontSize, handleToggleSidebar }) => {
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
      >
        <Icon className="mx-1" />
        {linkTxt}
      </Link>
    </span>
  );
};

export default NavItem;
