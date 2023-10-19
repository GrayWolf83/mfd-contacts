import { Outlet, useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { MainMenu } from './MainMenu'
import { Breadcrumbs } from 'src/components/Breadcrumbs'
import { autorun } from 'mobx'
import { contactsStore } from 'src/mobx/contactsStore'
import { groupsStore } from 'src/mobx/groupsStore'
import {useEffect} from 'react';


export const Layout = () => {
	const location = useLocation()
	const pathNames = location.pathname.split('/').filter((x) => x)

	useEffect(() => {
		autorun(()=> {
			contactsStore.loadList()
			groupsStore.loadList()
		})
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
