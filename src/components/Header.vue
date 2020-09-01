<template>
    <ul class="nav nav-pills">
        <router-link active-class="active" class="nav-link" exact tag='li' to="/">Home</router-link>
        <router-link active-class="active" class="nav-link" exact tag='li' to="/user">User</router-link>
    </ul>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
