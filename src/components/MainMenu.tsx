import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const MainMenu = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='/'>
					<h1>Книга контактов</h1>
				</Navbar.Brand>
				<Nav className='me-auto d-flex gap-2' as='ul'>
					<Nav.Item as='li'>
						<NavLink to='/groups'>Группы</NavLink>
					</Nav.Item>

					<Nav.Item as='li'>
						<NavLink to='/favorit'>Избранное</NavLink>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	)
}
