import { ContactDto } from 'src/types/dto/ContactDto';
import { makeAutoObservable } from 'mobx'
import { DATA_CONTACT } from 'src/__data__/index';

export const contactsStore = makeAutoObservable({
    contacts: [] as ContactDto[],

    loadList(){
        this.contacts = DATA_CONTACT
    },

    getContactById(id: ContactDto["id"]) {
        return this.contacts.find(contact=> contact.id === id)
    }
})