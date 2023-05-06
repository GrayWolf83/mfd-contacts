import React, { memo } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'

export const GroupListPage = memo<CommonPageProps>(
	({ contactsState, groupContactsState }) => {
		return (
			<Row xs={1} md={2} lg={4} className='g-3'>
				{groupContactsState[0].map((groupContacts) => (
					<Col key={groupContacts.id} className='d-flex'>
						<GroupContactsCard
							groupContacts={groupContacts}
							withLink
						/>
					</Col>
				))}
			</Row>
		)
	},
)
