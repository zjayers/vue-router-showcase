<template>
    <div>
        <h1>User Edit Works</h1>
        <p>Locale: {{ $route.query.locale }}</p>
        <div style="height: 1100px"></div>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <p id="data">Data</p>
    </div>
</template>

<script>
export default {
    name: "UserEdit",
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('Inside Lifecycle Hook', to, from);
        next();
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            return next();
        }
    }
}
</script>

<style scoped>

</style>
