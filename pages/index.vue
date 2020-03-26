<template>
  <section class="section">
    <b-table
      ref="table"
      :data="data"
      paginated
      per-page="25"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="island"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="island" label="Island">
          {{ props.row.island }}
        </b-table-column>

        <b-table-column field="visits" label="Number of Visits" sortable>
          {{ props.row.visits }}
        </b-table-column>

        <b-table-column field="fossils" label="Found Fossils" sortable>
          {{ props.row.fossils }}
        </b-table-column>

        <b-table-column field="fossils_per" label="Fossils per Island" sortable>
          {{ Math.round((props.row.fossils / props.row.visits) * 100) + '%' }}
        </b-table-column>

        <b-table-column field="bottles" label="Found Bottles" sortable>
          {{ props.row.bottles }}
        </b-table-column>

        <b-table-column field="bottles_per" label="Bottles per Island" sortable>
          {{ Math.round((props.row.bottles / props.row.visits) * 100) + '%' }}
        </b-table-column>

        <b-table-column field="players" label="Discovered by Players" sortable>
          {{ props.row.players }}
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-256x256">
              <img src="https://buefy.org/static/img/placeholder-128x128.png" />
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
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
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
  }
}
</script>
