<template>
    <b-field>
        <div class="control">
            <b-switch @input="toggle">
                Chances for Fossil &amp; Bottle
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
