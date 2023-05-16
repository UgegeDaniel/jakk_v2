import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem';
import { navigations } from './navUtils';
import { signOut } from '../../redux-toolkit/features/userSlice';
import Btn from '../Btn/Btn';

const NavItems = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userState.user);
    return (
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="">
                {navigations.map((navItem, index) =>
                    <NavItem key={index} link={navItem.link} Icon={navItem.Icon} linkTxt={navItem.linkTxt} />
                )}
                {user &&
                    <Btn
                        variant="primary"
                        txt="Sign Out"
                        size="btn btn-primary btn-sm"
                        onClick={() => dispatch(signOut())}
                    />
                }
            </Nav>
        </Navbar.Collapse>
    )
}
export default NavItems