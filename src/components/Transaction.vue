<template>
  <div class="transaction">
    <form v-on:submit="onTransfer">
      <div class="input-label">
        <label for="contacts">Choose contact</label>
        <select name="contacts" v-model="currContact">
          <option v-for="contact in contacts" :key="contact" :value="contact">
            {{ contact.name }}
          </option>
        </select>
      </div>
      <div class="input-label">
        <label for="name">Name</label>
        <input type="text" v-model="currContact.name" />
      </div>
      <div class="input-label">
        <label for="name">Id</label>
        <input type="text" v-model="currContact._id" />
      </div>
      <div class="input-label">
        <label for="tel">Phone</label>
        <input type="tel" v-model="currContact.phone" />
      </div>
      <div class="input-label">
        <label for="email">Email</label>
        <input type="email" v-model="currContact.email" />
      </div>
      <div class="input-label">
        <label for="amount">Amount (BTC)</label>
        <input
          type="number"
          min="0"
          :max="loggedInUser.balance"
          v-model="amount"
        />
      </div>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import { userService } from "../services/userService.js";
export default {
  props: {
    loggedInUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      contacts: [],
      currContact: {
        name: "",
        email: "",
        _id: "",
        phone: "",
      },
      amount: 0,
    };
  },
  methods: {
    onTransfer(ev) {
      ev.preventDefault();
      const transaction = {
        from: this.loggedInUser._id,
        toId: this.currContact._id,
        to: this.currContact.name,
        at: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
        amount: this.amount,
      };
      userService.onTransaction(transaction);
    }
  },
  async created() {
    this.$store.dispatch({ type: "setContacts" });
    this.contacts = this.$store.getters.contacts;
  },
};
</script>

<style lang="scss" scoped>
.transaction {
  border: 5px solid goldenrod;
  width: 300px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: white;
    padding: 1rem;
    .input-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input,
      select {
        outline: 0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-color: hsla(160, 100%, 37%, 1);
        background: transparent;
        color: white;
        flex-basis: 70%;
        &:focus {
          background-color: hsla(160, 100%, 37%, 1);
        }
      }
    }
    button {
      outline: 0;
      border: 1px solid hsla(160, 100%, 37%, 1);
      background: transparent;
      color: white;
      padding: 0.5rem;
      cursor: pointer;
      &:hover {
        background: hsla(160, 100%, 37%, 1);
      }
    }
  }
}
</style>