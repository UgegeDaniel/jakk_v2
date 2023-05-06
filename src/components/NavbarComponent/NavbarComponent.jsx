import { Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { TbMenu2 } from 'react-icons/tb';
import FormComponent from '../FormComponent/FormComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import NavItems from './NavItems';

const NavbarComponent = () => {
    const user = useSelector((state) => state.userState.user)
    const isSignIn = useSelector((state) => state.userState.isSignIn)
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/"> Jakk </Navbar.Brand>
                    {user
                        ? <Navbar.Text>
                            Signed in as: <span className="text-primary">{user.email}</span>
                        </Navbar.Text>
                        :
                        <ModalComponent
                            openModalTxt="Sign Up /Sign In"
                            modalHeaderTxt={isSignIn ? "Sign In" : "Sign Up"}
                        >
                            <FormComponent />
                        </ModalComponent>
                    }
                    <Navbar.Toggle> <TbMenu2 /> </Navbar.Toggle>
                    <NavItems user={user} />
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;