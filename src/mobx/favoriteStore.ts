import { ContactDto } from 'src/types/dto/ContactDto';
import { makeAutoObservable } from 'mobx'

export const favoritesStore = makeAutoObservable({
    entities: [] as ContactDto['id'][],

    toggleFavorite(id: ContactDto['id']) {
        const hasFavorite = this.entities.includes(id)

        if (hasFavorite) {
            this.entities = this.entities.filter(
                (item) => item !== id,
            )
        } else {
            this.entities = [...this.entities, id]
        }
    },

    hasFavorite(id: ContactDto['id']) {
        return this.entities.includes(id)
    }

    
})