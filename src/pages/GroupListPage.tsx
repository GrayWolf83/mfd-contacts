import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useAppSelector } from 'src/store'
import { getGroupsList } from 'src/store/groups'

export const GroupListPage = () => {
	const groups = useAppSelector(getGroupsList())

	return (
		<Row xs={1} md={2} lg={4} className='g-3'>
			{groups.map((group) => (
				<Col key={group.id} className='d-flex'>
					<GroupContactsCard groupContacts={group} withLink />
				</Col>
			))}
		</Row>
	)
}
