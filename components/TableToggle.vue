<template>
    <b-field>
        <div class="control">
            <b-switch @input="toggle">
                Chances for Fossils &amp; Bottles
            </b-switch>
        </div>
    </b-field>
</template>
<script>
// TODO: WIP
export default {
    name: 'TableToggle',
    methods: {
        toggle(state) {
            this.$eventBus.$emit('toggle-columns', state)
        }
    }
}
</script>
