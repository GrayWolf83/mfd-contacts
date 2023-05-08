import { Col, Row } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/store'
import { getContactById } from 'src/store/contacts'

export const ContactPage = () => {
	const { contactId } = useParams<{ contactId: string }>()
	const contact = useAppSelector(getContactById(contactId || ''))

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
}
