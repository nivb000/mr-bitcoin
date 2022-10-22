<template>
  <section class="contact-list">
    <ul>
      <TransitionGroup name="list">
        <li v-for="contact in contacts" :key="contact._id">
          <contact-preview :contact="contact" />
          <div class="btns">
            <button @click="removeContact(contact._id)">Remove</button>
            <button>
              <RouterLink v-bind:to="`/contact/edit/${contact._id}`">
                Edit
              </RouterLink>
            </button>
          </div>
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeContact(id) {
      this.$emit("removeContact", id);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss" scoped>
.contact-list {
  color: white;
  margin-block-start: 3rem;
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    gap: 20px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background-color: goldenrod;
      border-width: 5px;
      border-style: solid;
      border-image: linear-gradient(to right, hsla(160, 100%, 37%, 1), orange) 10;
      color: black;
      padding: 1rem;
      border-radius: 15px;
      .btns {
        width: 40%;
        display: flex;
        justify-content: space-between;
        margin-block-start: 0.5rem;
        > * {
          text-decoration: none;
          background: transparent;
          border: 1px solid black;
          padding: 0.3rem;
          outline: 0;
          &:hover {
            background-color: hsla(160, 100%, 37%, 1);
            cursor: pointer;
            transition: background-color 0.5s;
          }
        }
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>