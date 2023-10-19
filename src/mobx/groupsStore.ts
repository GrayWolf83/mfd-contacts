import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { makeAutoObservable } from 'mobx'
import { DATA_GROUP_CONTACT } from 'src/__data__';

export const groupsStore = makeAutoObservable({
    groups: [] as GroupContactsDto[],

    loadList(){
        this.groups = DATA_GROUP_CONTACT
    },

    getGroupById(id: GroupContactsDto["id"]) {
        return this.groups.find(group=> group.id === id)
    }
})