<template>
    <h4>Name: {{contact.name}}</h4>
    <h5>Email 📧: {{contact.email}}</h5>
    <h5>Phone 📱: {{contact.phone}}</h5>
</template>

<script>
export default {
    props:{
        contact:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    h4{
        margin-block-end: 1rem;
    }

</style>