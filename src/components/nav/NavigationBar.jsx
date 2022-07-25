import { Container, Form, Button, Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap"

function NavigationBar() {
    return (
        <>
            {["lg"].map((expand) => (
                <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
                    <Container fluid>
                        <Navbar.Brand href='#'>Bromans</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='end'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-start flex-grow-1 pe-3'>
                                    {/* <Nav.Link href='#action1'>Home</Nav.Link> */}
                                    <Nav.Link href='/'>Exercises</Nav.Link>
                                    <Nav.Link href='/create'>Create Exercise Log</Nav.Link>
                                    <Nav.Link href='/user'>Create User</Nav.Link>
                                    <NavDropdown title='Dropdown' id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                                        <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className='d-flex'>
                                    <Form.Control
                                        type='search'
                                        placeholder='Search'
                                        className='me-2'
                                        aria-label='Search'
                                    />
                                    <Button variant='outline-success'>Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavigationBar
