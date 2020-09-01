<template>
    <div>
        <h3>User Detail</h3>
        <p>User loaded has ID: {{ id }}</p>
        <router-link
            :to="link"
            class="btn btn-primary"
            tag="button">Edit User
        </router-link>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    props: {
        id: String
    },
    data() {
        return {
            link: {
                name: 'editUser',
                params: {
                    id: this.id
                },
                query: {
                    locale: 'en',
                    q: 100
                },
                hash: '#data'
            }
        }
    }
}
</script>

<style scoped>

</style>
