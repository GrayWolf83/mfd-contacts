import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/store'
import { getContactsList } from 'src/store/contacts'
import { getGroupsList } from 'src/store/groups'

export const ContactListPage = () => {
	const contacts = useAppSelector(getContactsList())
	const groups = useAppSelector(getGroupsList())
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

		// setContacts(findContacts)
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
					{contacts.map((contact) => (
						<Col key={contact.id}>
							<ContactCard contact={contact} withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	)
}
