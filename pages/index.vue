<template>
  <section class="section">
    <b-table :data="data" :columns="columns"></b-table>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    const columns = [
      {
        field: 'island',
        label: 'Island',
        sortable: true
      },
      {
        field: 'visits',
        label: 'Number of Visits',
        numeric: true,
        sortable: true
      },
      {
        field: 'fossil',
        label: 'Found Fossils',
        numeric: true,
        sortable: true
      },
      {
        field: 'fossil_per',
        label: 'Fossils per Visit',
        numeric: true,
        sortable: true
      },
      {
        field: 'bottle',
        label: 'Found Bottles',
        numeric: true,
        sortable: true
      },
      {
        field: 'bottle_per',
        label: 'Bottles per Visit',
        numeric: true,
        sortable: true
      }
    ]
    return {
      data: [
        {
          island: 'Island 0',
          visits: 14,
          fossil: 3,
          fossil_per: 0.1,
          bottle: 3,
          bottle_per: 0.4
        },
        {
          island: 'Island 1',
          visits: 14,
          fossil: 3,
          fossil_per: 0.1,
          bottle: 3,
          bottle_per: 0.4
        },
        {
          island: 'Island 2',
          visits: 14,
          fossil: 3,
          fossil_per: 0.1,
          bottle: 3,
          bottle_per: 0.4
        }
      ],
      columns
    }
  }
}
</script>
