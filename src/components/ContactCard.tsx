import { ContactDto } from 'src/types/dto/ContactDto'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { favoritesStore } from 'src/mobx/favoriteStore'

interface ContactCardProps {
	contact: ContactDto
	withLink?: boolean
}

export const ContactCard = observer<ContactCardProps>(
	({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
		const hasFavorite = favoritesStore.hasFavorite(id)

		const handleToggleFavorite = () => {
			favoritesStore.toggleFavorite(id)
		}

		return (
			<Card key={id}>
				<Card.Img variant='top' src={photo} height={200} />
				<Card.Body>
					<Card.Title className='d-flex justify-content-around'>
						{withLink ? (
							<Link to={`/contact/${id}`}>{name}</Link>
						) : (
							name
						)}
						<img
							src={hasFavorite ? '/star-fill.svg' : '/star.svg'}
							className='favorite-icon'
							onClick={handleToggleFavorite}
							alt='favorite icon'
						/>
					</Card.Title>
					<Card.Body>
						<ListGroup>
							<ListGroup.Item>
								<Link to={`tel:${phone}`}>{phone}</Link>
							</ListGroup.Item>
							<ListGroup.Item>{birthday}</ListGroup.Item>
							<ListGroup.Item>{address}</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card.Body>
			</Card>
		)
	},
)
