<template>
  <header>
    <div class="header-content">
      <RouterLink to="/"><h1>Mr Bitcoin</h1></RouterLink>
      <nav :class="opened">
        <RouterLink to="/" @click="toggleNav">HOME</RouterLink>
        <RouterLink to="/contact" @click="toggleNav">CONTACTS</RouterLink>
        <RouterLink to="/about" @click="toggleNav">ABOUT</RouterLink>
      </nav>
      <button class="hamburger" @click="toggleNav">☰</button>
    </div>
  </header>
</template>

<script>

  export default{

    data(){
      return{
        navIsOpen: false
      }
    },
    methods:{
      toggleNav(){
        this.navIsOpen = !this.navIsOpen
      }
    },
    computed:{
      opened(){
        if(this.navIsOpen) return 'opened'
      }
    }
  }



</script>

<style lang='scss'>
header {
  background-color: hsla(160, 100%, 37%, 1);
  .header-content{
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    padding: 0 1.5rem;
    height: 80px;
    .hamburger{
      display: none;
    }
    a {
      text-decoration: none;
      color: black;
    }
    nav {
      a {
        margin: 1rem;
      }
      .router-link-active {
        color: white;
        text-decoration: overline;
        text-decoration-color: goldenrod;
      }
    }
  }
}
@media (max-width: 600px) {
    header {
      .header-content{
      max-width: 95%;
      padding: 0 0.5rem;
      h1{font-size: 1.5rem;}
      nav{
        display: none;
        animation: slide-in 1s;
        &.opened{
          position: fixed;
          top: 80px;
          right: 0;
          width: 100%;
          display: block;
          background-color: rgba(78, 145, 199, 0.654);
          height: 100%;
          z-index: 3;
        }
        a{
          margin-block-end: 1rem;
          text-align: center;
          padding: 1.5rem;
          color: white;
          font-size: 1.2rem;
          display: block;
        }
      }
      .hamburger{
        display: inline;
        background: transparent;
        outline: 0;
        font-size: 1.5rem;
        border: 0;
        cursor: pointer;
      }
    }
  }
}
</style>