import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { observer } from 'mobx-react-lite'
import { contactsStore } from 'src/mobx/contactsStore'
import { favoritesStore } from 'src/mobx/favoriteStore'

export const FavoritListPage = observer(() => {
	const [favoritesContacts, setFavoritesContacts] = useState<ContactDto[]>([])
	const contacts = contactsStore.contacts
	const favorites = favoritesStore.entities

	useEffect(() => {
		if(favorites.length) {
			const favList = contacts.filter((contact) =>
			favorites.includes(contact.id),
		)
		setFavoritesContacts(favList)
		} else {
			setFavoritesContacts([])
		}
	}, [favorites, contacts])

	return (
		<Row xxl={4} className='g-4'>
			{favoritesContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard contact={contact} withLink />
				</Col>
			))}
		</Row>
	)
})
