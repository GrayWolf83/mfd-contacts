import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { groupsStore } from 'src/mobx/groupsStore'

export const GroupListPage = observer(() => {
	const groups = groupsStore.groups

	return (
		<Row xs={1} md={2} lg={4} className='g-3'>
			{groups.map((group) => (
				<Col key={group.id} className='d-flex'>
					<GroupContactsCard groupContacts={group} withLink />
				</Col>
			))}
		</Row>
	)
})
