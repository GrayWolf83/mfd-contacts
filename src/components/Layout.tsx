import { Outlet, useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { MainMenu } from './MainMenu'
import { Breadcrumbs } from 'src/components/Breadcrumbs'
import { useAppDispatch } from 'src/store'
import { loadContactsList } from 'src/store/contacts'
import { loadGroupsList } from 'src/store/groups'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'

export const Layout = () => {
	const location = useLocation()
	const pathNames = location.pathname.split('/').filter((x) => x)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadContactsList(DATA_CONTACT || []))
		dispatch(loadGroupsList(DATA_GROUP_CONTACT || []))
	}, [])

	return (
		<Container>
			<Row>
				<Col xxl={12}>
					<MainMenu />
				</Col>
				<Col xxl={12}>
					<Breadcrumbs pathNames={pathNames} />
				</Col>
				<Col xxl={12}>
					<Outlet />
				</Col>
				<Col xxl={12}>
					<footer></footer>
				</Col>
			</Row>
		</Container>
	)
}
