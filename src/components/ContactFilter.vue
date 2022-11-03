<template>
    <input type="search" v-on:input="onFilter" v-model="filter.txt" placeholder="Type to search"> 
</template>

<script>
export default {
    data(){
        return{
            filter:{
                txt: ''
            }
        }
    },
    methods:{
        onFilter(){
            this.$emit('setFilter', this.filter)
        }
    }

}
</script>

<style lang="scss" scoped>
input{
    display: block;
    width: 30%;
    margin: 0 auto;
    height: 40px;
    outline: 0;
    color: white;
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: hsla(160, 100%, 37%, 1);
    padding-inline-start: 0.5rem;
}
::placeholder{
    color: white;
    opacity: 1;
}

@media (max-width: 600px){
    input{width: 70%;}
}
</style>