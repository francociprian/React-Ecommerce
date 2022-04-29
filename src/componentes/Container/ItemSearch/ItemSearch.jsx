import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs' ;
import { Stack, Form, Button, Container, Dropdown } from 'react-bootstrap'

function ItemSearch() {
  return (
    <>
      <Container>
          <Stack direction="horizontal" gap={3} className='mt-5'>
            <Form.Control className="me-auto" placeholder="Search" />
            <Button variant="secondary"><BsSearch /></Button>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >
                  <NavLink to="description/T-Shirt" className="dropdown-item">T-Shirt</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="description/Jacket" className="dropdown-item">Jacket</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="description/Pants" className="dropdown-item">Pants</NavLink>
                </Dropdown.Item>  
              </Dropdown.Menu>
            </Dropdown>
          </Stack>  
      </Container>
    </>
  )
}

export default ItemSearch