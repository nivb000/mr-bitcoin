<template>
  <section v-if="contact" class="contact-edit">
    <div class="input-label">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="contact.name" />
    </div>
    <div class="input-label">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="contact.email" />
    </div>
    <div class="input-label">
      <label for="phone">Phone</label>
      <input type="tel" id="phone" v-model="contact.phone" />
    </div>
    <button @click="saveContact">Save</button>
  </section>
</template>

<script>
import { contactService } from '../services/contactService.js'
export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async saveContact() {
      this.$store.dispatch({ type: "saveContact", contact: this.contact });
      this.$router.back();
    },
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      this.contact = await contactService.getContactById(id);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
};
</script>

<style lang="scss" scoped>
.contact-edit {
  .input-label {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 1rem;
    label {
      color: white;
    }
    input {
      height: 30px;
      width: 70%;
      color: white;
      outline: 0;
      background-color: transparent;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      &:focus {
        border-color: hsla(160, 100%, 37%, 1);
      }
    }
  }
  button {
    width: 100px;
    height: 30px;
    outline: 0;
    border: 1px solid hsla(160, 100%, 37%, 1);
    background-color: transparent;
    color: white;
    &:hover {
      background-color: hsla(160, 100%, 37%, 1);
      cursor: pointer;
    }
    transition: background-color 0.2s;
  }
}
</style>