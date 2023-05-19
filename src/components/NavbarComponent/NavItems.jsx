import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem';
import { navigations } from './navUtils';
import { signOut } from '../../redux-toolkit/features/userSlice';
import Btn from '../Btn/Btn';

const NavItems = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state)
    return (
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <div className="d-felx justify-content-between align-items-center">
                    {navigations.map((navItem, index) =>
                        <NavItem key={index} link={navItem.link} Icon={navItem.Icon} linkTxt={navItem.linkTxt} />
                    )}
                    {user &&
                        <Btn
                            txt="Sign Out"
                            onClick={() => dispatch(signOut())}
                        />
                    }
                </div>
            </Nav>
        </Navbar.Collapse>
    )
}
export default NavItems