import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from './Modal';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';

const user = false;
function Navbar() {
    return (
        <>
            <BootstrapNavbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <BootstrapNavbar.Brand href="#home">
                        Jakk
                    </BootstrapNavbar.Brand>
                    {user ?
                        <BootstrapNavbar.Text>
                            Signed in as: Mark Otto
                        </BootstrapNavbar.Text>
                        :
                        <Modal><SignUpForm /></Modal>
                    }
                    <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootstrapNavbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </Nav>

                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </>
    );
}

export default Navbar;