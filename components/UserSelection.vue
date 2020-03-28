<template>
    <button @click="update">Update</button>
</template>
<script>
export default {
    name: 'UserSelection',
    methods: {
        update() {
            this.$eventBus.$emit('user-selection')
        }
    }
}
</script>
