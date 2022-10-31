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

  @media (max-width: 600px){
    main{
      max-width: 95%;
    }
  }
</style>
