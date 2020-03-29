<template>
    <div>
        <b-table
            ref="table"
            :data="data"
            paginated
            per-page="25"
            detailed
            detail-key="island"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
        >
            <template slot-scope="props">
                <b-table-column field="island" label="Island" sortable>
                    {{ props.row.island }}
                </b-table-column>

                <b-table-column
                    field="visits"
                    label="Number of Visits"
                    sortable
                >
                    {{ props.row.visits }}
                </b-table-column>

                <b-table-column field="fossils" label="Found Fossils" sortable>
                    {{ props.row.fossils }}
                </b-table-column>

                <b-table-column
                    field="fossils_per"
                    label="Fossils per Island"
                    sortable
                >
                    <div v-if="props.row.visits === 0">
                        -
                    </div>
                    <div v-else>
                        {{
                            Math.round(
                                (props.row.fossils / props.row.visits) * 100
                            ) + '%'
                        }}
                    </div>
                </b-table-column>

                <b-table-column field="bottles" label="Found Bottles" sortable>
                    {{ props.row.bottles }}
                </b-table-column>

                <b-table-column
                    field="bottles_per"
                    label="Bottles per Island"
                    sortable
                >
                    <div v-if="props.row.visits === 0">
                        -
                    </div>
                    <div v-else>
                        {{
                            Math.round(
                                (props.row.bottles / props.row.visits) * 100
                            ) + '%'
                        }}
                    </div>
                </b-table-column>

                <b-table-column
                    field="players"
                    label="Discovered by Players"
                    sortable
                >
                    {{ props.row.users }}
                </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-256x256">
                            <img
                                src="https://buefy.org/static/img/placeholder-128x128.png"
                            />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.island }}</strong>
                                <small>what kind of fruits/flowers etc.</small>
                                <br />
                                Short notes about the island, maybe specialties
                            </p>
                        </div>
                    </div>
                </article>
            </template>
        </b-table>
    </div>
</template>

<script>
import islands from '~/assets/islands.json'
const userData = {}
const totalData = {}

// import all data from users
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
    userData[user] = requireComponent(fileName)
})

// prepare totalData with islands
islands.forEach((island) => {
    island.visits = 0
    island.fossils = 0
    island.bottles = 0
    island.users = 0
    totalData[island.island] = island
})

// populate totalData
for (const user in userData) {
    if (Object.prototype.hasOwnProperty.call(userData, user)) {
        const userIslands = userData[user]
        for (const islandName in userIslands) {
            if (Object.prototype.hasOwnProperty.call(userIslands, islandName)) {
                const island = userIslands[islandName]
                if (
                    Object.prototype.hasOwnProperty.call(totalData, islandName)
                ) {
                    totalData[islandName].visits += island.visits
                    totalData[islandName].fossils += island.fossils
                    totalData[islandName].bottles += island.bottles
                    totalData[islandName].users += 1
                } else {
                    // user visited an island thats not in islands.json
                }
            }
        }
    }
}

export default {
    name: 'HomePage',
    data() {
        // always return combined data first
        // convert totalData to array

        return {
            data: Object.values(totalData)
        }
    },
    mounted() {
        this.$eventBus.$on('user-selection', () => {
            // read input || pass as parameter of text input
            // change data
            this.data = [
                {
                    island: 'Island 0',
                    visits: 8,
                    fossils: 3,
                    bottles: 1,
                    players: 2
                }
            ]
        })
    }
}
</script>
