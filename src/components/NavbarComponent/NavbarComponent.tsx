import React from 'react';
// import { Navbar, Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { TbMenu2 } from 'react-icons/tb';
// import NavItems from './NavItems';
// import StateType from "../../types/stateTypes";
import Sidebar from './Sidebar'

const NavbarComponent: React.FC = () => {
  // const { user } = useSelector((state: StateType) => state);

  return (
    <>
      {/* <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Jakk</Navbar.Brand>
        {user && (
          <Container>
            <Navbar.Text>
              Signed in as: <span className="text-primary">{user.user?.email}</span>
            </Navbar.Text> */}
            {/* <Navbar.Toggle>
              <TbMenu2 />
            </Navbar.Toggle> */}
              <Sidebar />
            {/* <NavItems /> */}
          {/* </Container>
        )}
      </Navbar> */}
    </>
  );
};

export default NavbarComponent;
