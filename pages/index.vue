<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <TableToggle />
            </div>
            <div class="column">
                <UserSelection />
            </div>
        </div>

        <IslandTable />
    </section>
</template>

<script>
import IslandTable from '../components/IslandTable'
import UserSelection from '../components/UserSelection'
import TableToggle from '../components/TableToggle'

export default {
    name: 'Statistics',
    components: {
        IslandTable,
        UserSelection,
        TableToggle
    }
}
</script>
