import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useEffect, useState } from 'react'
import { contactsStore } from 'src/mobx/contactsStore'
import { groupsStore } from 'src/mobx/groupsStore'

export const ContactListPage = () => {
	const contacts = contactsStore.contacts
	const groups = groupsStore.groups
	const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([])

	useEffect(() => {
		if (contacts) {
			setFilteredContacts(contacts)
		}
	}, [contacts])

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = contacts

		if (fv.name) {
			const fvName = fv.name.toLowerCase()
			findContacts = findContacts.filter(({ name }) =>
				name.toLowerCase().includes(fvName),
			)
		}

		if (fv.groupId) {
			const groupContacts = groups.find(({ id }) => id === fv.groupId)

			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) =>
					groupContacts.contactIds.includes(id),
				)
			}
		}

		setFilteredContacts(findContacts)
	}

	return (
		<Row xxl={1}>
			<Col className='mb-3'>
				<FilterForm
					groupContactsList={groups}
					initialValues={{}}
					onSubmit={onSubmit}
				/>
			</Col>
			<Col>
				<Row xxl={4} className='g-4'>
					{filteredContacts.map((contact) => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	)
}
