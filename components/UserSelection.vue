<template>
    <b-field label="Select specific user">
        <b-autocomplete
            placeholder="username"
            icon="account"
            clearable
            open-on-focus
            :data="users"
            @select="selected"
        >
        </b-autocomplete>
    </b-field>
</template>
<script>
// import all user names
const users = []
const requireComponent = require.context(
    '../assets/users/',
    false,
    /\w+\.json$/
)
requireComponent.keys().forEach((fileName) => {
    const user = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    if (user === '_template') return 0
    users.push(user)
})

export default {
    name: 'UserSelection',
    data() {
        return {
            users
        }
    },
    methods: {
        selected(selection) {
            this.$eventBus.$emit('user-selection', selection)
        }
    }
}
</script>
