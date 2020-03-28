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
                    {{
                        Math.round(
                            (props.row.fossils / props.row.visits) * 100
                        ) + '%'
                    }}
                </b-table-column>

                <b-table-column field="bottles" label="Found Bottles" sortable>
                    {{ props.row.bottles }}
                </b-table-column>

                <b-table-column
                    field="bottles_per"
                    label="Bottles per Island"
                    sortable
                >
                    {{
                        Math.round(
                            (props.row.bottles / props.row.visits) * 100
                        ) + '%'
                    }}
                </b-table-column>

                <b-table-column
                    field="players"
                    label="Discovered by Players"
                    sortable
                >
                    {{ props.row.players }}
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

// function getFileNameOnly(filePath) {
//     return filePath
//         .split('/')
//         .pop()
//         .split('.')
//         .shift()
// }
// function loadVisits(selection) {
//     const user = selection || ''
//     const reg = new RegExp(user + '.json$')
//     // const requireContext = require.context('./visits', false, reg)
//     // const data = {}
//     // requireContext.keys().forEach((key) => {
//     //    const obj = requireContext(key)
//     //     const simpleKey = getFileNameOnly(key)
//     //     data[simpleKey] = obj
//     // })
//     // return data
// }

export default {
    name: 'HomePage',
    data() {
        // aggregate visit data
        islands.forEach((island) => {
            // do something
        })
        // format visit data

        // always return combined data
        return {
            data: [
                {
                    island: 'Island 0',
                    visits: 8,
                    fossils: 3,
                    bottles: 1,
                    players: 2
                },
                {
                    island: 'Island 1',
                    visits: 4,
                    fossils: 1,
                    bottles: 2,
                    players: 1
                },
                {
                    island: 'Island 2',
                    visits: 14,
                    fossils: 1,
                    bottles: 3,
                    players: 4
                }
            ]
        }
    },
    mounted() {
        this.$eventBus.$on('user-selection', () => {
            // this.data = [
            //     {
            //         island: 'Island 0',
            //         visits: 8,
            //         fossils: 3,
            //         bottles: 1,
            //         players: 2
            //     }
            // ]
        })
    }
}
</script>
