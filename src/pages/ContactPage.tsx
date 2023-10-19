import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactsStore } from 'src/mobx/contactsStore'

export const ContactPage = observer(() => {
	const { contactId } = useParams<{ contactId: string }>()
	const contact = contactsStore.getContactById(contactId || "")

	if (!contact) {
		return <Navigate to='/contact' />
	}

	return (
		<Row xxl={3}>
			<Col className={'mx-auto'}>
				{contact ? <ContactCard contact={contact} /> : <Empty />}
			</Col>
		</Row>
	)
})
