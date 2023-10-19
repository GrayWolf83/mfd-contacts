import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { observer } from 'mobx-react-lite'
import { contactsStore } from 'src/mobx/contactsStore'
import { groupsStore } from 'src/mobx/groupsStore'

export const GroupPage = observer(() => {
	const { groupId } = useParams<{ groupId: string }>()
	const contacts = contactsStore.contacts
	const [groupContacts, setGroupContacts] = useState<ContactDto[]>()
	const group = groupsStore.getGroupById(groupId || "")

	useEffect(() => {
		if (group) {
			const groupContactsList = contacts.filter((contact) =>
				group.contactIds.includes(contact.id),
			)

			if (groupContactsList) {
				setGroupContacts(groupContactsList)
			}
		}
	}, [group, contacts])

	return (
		<Row className='g-4'>
			{group ? (
				<>
					<Col xxl={12}>
						<Row xxl={3}>
							<Col className='mx-auto'>
								<GroupContactsCard groupContacts={group} />
							</Col>
						</Row>
					</Col>
					{groupContacts && (
						<Col>
							<Row xxl={4} className='g-4'>
								{groupContacts.map((contact) => (
									<Col key={contact.id}>
										<ContactCard
											contact={contact}
											withLink
										/>
									</Col>
								))}
							</Row>
						</Col>
					)}
				</>
			) : (
				<Empty />
			)}
		</Row>
	)
})
