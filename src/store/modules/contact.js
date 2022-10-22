import { contactService } from '../../services/contactService.js'
export default {
    state: {
        contacts: []
    },
    mutations: {
        SET_CONTACTS(state, { contacts }) {
            state.contacts = contacts
        },
        REMOVE_CONTACT(state, { id }) {
            const idx = state.contacts.findIndex(contact => contact._id === id)
            state.contacts.splice(idx, 1)
        },
        SAVE_CONTACT(state, { contact }) {
            const idx = state.contacts.findIndex(contact => contact._id === contact._id)
            state.contacts.splice(1, idx, contact)
        }
    },
    actions: {
        async setContacts(context) {
            const contacts = await contactService.getContacts()
            context.commit({ type: 'SET_CONTACTS', contacts })
        },
        async removeContact({ commit }, { id }) {
            await contactService.deleteContact(id)
            commit({ type: 'REMOVE_CONTACT', id })
        },
        async saveContact({ commit }, { contact }) {
            await contactService.saveContact(contact)
            commit({ type: 'SAVE_CONTACT', contact })
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}