<template>
    <section class="section">
        <IslandCards />
    </section>
</template>
<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0.5em;
}

.card {
    height: max-content;
}
</style>
<script>
import IslandCards from '~/components/IslandCards'

export default {
    name: 'Islands',

    components: {
        IslandCards
    }
}
</script>
