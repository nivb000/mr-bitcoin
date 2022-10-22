<template>
  <button>
    <RouterLink to="/contact/edit/">Add new contact</RouterLink>
  </button>
  <contact-filter v-on:setFilter="setFilter" />
  <contact-list :contacts="contactsToShow" v-on:removeContact="removeContact" />
</template>
<script>
import ContactList from "../components/ContactList.vue";
import ContactFilter from "../components/ContactFilter.vue";

export default {
  data() {
    return {
      filter: { txt: "" },
    };
  },
  methods: {
    removeContact(id) {
      this.$store.dispatch({ type: "removeContact", id });
    },
    setFilter(filter) {
      this.filter.txt = filter.txt;
    },
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filter.txt, "i");
      return this.contacts.filter(contact => regex.test(contact.name) || regex.test(contact.email) || regex.test(contact.phone));
    },
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  async created() {
    this.$store.dispatch({ type: "setContacts" });
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid hsla(160, 100%, 37%, 1);
  background: transparent;
  &:hover {
    background: hsla(160, 100%, 37%, 1);
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: white;
  }
}
</style>