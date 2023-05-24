import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/store'
import { getContactsList } from 'src/store/contacts'
import { getFavoritesList } from 'src/store/favorites'

export const FavoritListPage = () => {
	const [favoritesContacts, setFavoritesContacts] = useState<ContactDto[]>([])
	const contacts = useAppSelector(getContactsList())
	const favorites = useAppSelector(getFavoritesList())

	useEffect(() => {
		const favList = contacts.filter((contact) =>
			favorites.includes(contact.id),
		)
		setFavoritesContacts(favList)
	}, [favorites])

	return (
		<Row xxl={4} className='g-4'>
			{favoritesContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard contact={contact} withLink />
				</Col>
			))}
		</Row>
	)
}
