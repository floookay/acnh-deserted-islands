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
                    :visible="showColumns"
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
                    :visible="showColumns"
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
                        <p class="image is-128x128">
                            <img
                                :src="
                                    '/acnh-deserted-islands/islands/x256/' +
                                        props.row.info.img
                                "
                            />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.island }}</strong>
                                <small>
                                    {{
                                        'fruits: ' +
                                            props.row.info.fruits +
                                            ' | flowers: ' +
                                            props.row.info.flowers
                                    }}
                                </small>
                                <br />
                                {{ props.row.info.notes }}
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
for (const islandName in islands) {
    if (Object.prototype.hasOwnProperty.call(islands, islandName)) {
        const island = {
            island: islandName,
            visits: 0,
            fossils: 0,
            bottles: 0,
            users: 0
        }
        totalData[islandName] = island
    }
}

// populate totalData
for (const user in userData) {
    if (Object.prototype.hasOwnProperty.call(userData, user)) {
        const userIslands = userData[user].islands
        for (const islandName in userIslands) {
            if (
                Object.prototype.hasOwnProperty.call(userIslands, islandName) &&
                userIslands[islandName].visits > 0
            ) {
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

/**
 * Adds general island info and formats the incoming visit data for the island table
 * @param data object with island names as keys
 * @param username for user-specific island info
 * @returns the enriched and formatted data array
 */
function exportData(data, username) {
    // TODO to refactor, bloated function
    for (const islandName in data) {
        if (Object.prototype.hasOwnProperty.call(data, islandName)) {
            // TODO that the island is in islands should get checked by a test script
            data[islandName].info = {
                img: islands[islandName].img,
                fruits: islands[islandName].fruits,
                flowers: '',
                notes: islands[islandName].notes
            }
            // change info to user specific info
            if (
                username !== undefined &&
                Object.prototype.hasOwnProperty.call(userData, username)
            ) {
                switch (islands[islandName].fruits) {
                    case 'native':
                        data[islandName].info.fruits =
                            userData[username].fruits[0]
                        break
                    case 'secondary':
                        data[islandName].info.fruits =
                            userData[username].fruits[1]
                        break
                    case 'none':
                    default:
                        data[islandName].info.fruits = 'none'
                        break
                }
                data[islandName].info.flowers = ''
                Array(...islands[islandName].flowers).forEach(
                    (flower, index) => {
                        data[islandName].info.flowers += index > 0 ? ', ' : ''
                        switch (flower) {
                            case 'native':
                                data[islandName].info.flowers +=
                                    userData[username].flowers[0]
                                break
                            case 'secondary':
                                data[islandName].info.flowers +=
                                    userData[username].flowers[1]
                                break
                            default:
                                data[islandName].info.flowers = 'none'
                                break
                        }
                    }
                )
            } else {
                // convert flower array to string
                data[islandName].info.flowers = islands[
                    islandName
                ].flowers.toString()
            }
        }
    }

    return Object.values(data)
}

export default {
    name: 'IslandTable',
    data() {
        return {
            data: exportData(totalData),
            showColumns: false
        }
    },
    mounted() {
        this.$eventBus.$on('user-selection', (selection) => {
            if (Object.prototype.hasOwnProperty.call(userData, selection)) {
                const selectionData = userData[selection].islands
                for (const islandName in selectionData) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            selectionData,
                            islandName
                        )
                    ) {
                        selectionData[islandName].visits > 0
                            ? (selectionData[islandName].island = islandName)
                            : delete selectionData[islandName]
                    }
                }
                this.data = exportData(selectionData, selection)
            } else {
                // user unknown
                this.data = exportData(totalData)
            }
        })
        this.$eventBus.$on('toggle-columns', (state) => {
            this.showColumns = state
        })
    }
}
</script>
