import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt='Proshop' />
                    Proshop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        <Nav.Link href='/login'>
                            <FaUser /> Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header