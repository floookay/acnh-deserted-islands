<template>
    <div class="container">
        <div v-for="island in islands" :key="island[0]" class="card">
            <div class="card-image">
                <figure class="image">
                    <img
                        :src="
                            '/acnh-deserted-islands/islands/x512/' +
                                island[1].img
                        "
                        alt="image of island cartography"
                    />
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-4">
                    {{ island[0] }}
                </p>
                <div class="">
                    <div class="cardHeader">Fruits:</div>
                    {{ island[1].fruits }}
                </div>
                <div class="">
                    <div class="cardHeader">Flowers:</div>
                    {{ island[1].flowers.toString() }}
                </div>
                <div class="">
                    <div class="cardHeader">Notes:</div>
                    {{ island[1].notes }}
                </div>
            </div>
        </div>
    </div>
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
.cardHeader {
    font-weight: bold;
    display: inline-block;
}
</style>
<script>
import islands from '~/assets/islands.json'

export default {
    data() {
        return {
            islands: Object.entries(islands),
            columns: [
                { field: 'fruits', label: 'Fruits' },
                { field: 'flowers', label: 'Flowers' },
                { field: 'notes', label: 'Notes' }
            ]
        }
    }
}
</script>
