import { useDispatch } from 'react-redux';
import { Button, Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem';
import { navigations } from './navUtils';
import { signOut } from '../../redux-toolkit/features/userSlice';

const NavItems = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="">
                {navigations.map((navItem, index) =>
                    <NavItem key={index} link={navItem.link} Icon={navItem.Icon} linkTxt={navItem.linkTxt} />
                )}
                {user &&
                    <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-primary btn-sm"
                        onClick={() => dispatch(signOut())}>
                        Sign Out
                    </Button>
                }
            </Nav>
        </Navbar.Collapse>
    )
}
export default NavItems