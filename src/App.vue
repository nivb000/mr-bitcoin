<template>
  <AppHeader />
  <main>
     <RouterView />
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang='scss'>
  main{
    max-width: 80%;
    margin: 0 auto;
  }
</style>
