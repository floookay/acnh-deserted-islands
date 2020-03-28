<template>
    <section class="section">
        <UserSelection />
        <IslandTable />
    </section>
</template>

<script>
import IslandTable from '../components/IslandTable'
import UserSelection from '../components/UserSelection'

export default {
    name: 'HomePage',
    components: {
        IslandTable,
        UserSelection
    }
}
</script>
