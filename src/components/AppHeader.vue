<template>
  <header>
    <RouterLink to="/"><h1>Mr Bitcoin</h1></RouterLink>
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/contact">CONTACTS</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
      </nav>
  </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>

<style lang='scss'>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  background-color: hsla(160, 100%, 37%, 1);
  padding: 0 1.5rem;
  height: 80px;
  a{
    text-decoration: none;
    color: black;
  }
  nav{
    a{
      margin: 1rem;
    }
    .router-link-active{
      color: white;
      text-decoration: overline;
      text-decoration-color: goldenrod;
    }
  }
}
@media (max-width: 450px) {
  header{
    h1{
      font-size: 0.8rem;
    }
  }
}
</style>