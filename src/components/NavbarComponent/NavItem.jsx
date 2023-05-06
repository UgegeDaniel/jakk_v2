import { Link } from 'react-router-dom';

const NavItem = ({ link, Icon, linkTxt }) =>(
    <span className='mr-2'><Link to={link}>
        <Icon className="mx-1"/>{linkTxt}</Link>
    </span>
)
export default NavItem
