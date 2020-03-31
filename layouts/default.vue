<template>
    <div>
        <nav
            class="navbar header has-shadow is-primary"
            transparent
            role="navigation"
            aria-label="main navigation"
        >
            <div
                class="pageTitle has-text-weight-bold is-size-3 has-text-centered"
            >
                ACNH Deserted Island Tracker
            </div>
        </nav>

        <section class="main-content columns">
            <aside class="column is-2 section">
                <p class="menu-label is-hidden-touch">
                    General
                </p>
                <ul class="menu-list">
                    <li v-for="(item, key) of items" :key="key">
                        <nuxt-link :to="item.to" exact-active-class="is-active">
                            <b-icon pack="mdi" :icon="item.icon" />
                            {{ item.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </aside>

            <div class="container column is-10">
                <nuxt />
            </div>
        </section>
    </div>
</template>
<style scoped>
.pageTitle {
    width: 100%;
}
</style>
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Statistics',
                    icon: 'table',
                    to: { name: 'index' }
                },
                {
                    title: 'Islands',
                    icon: 'ferry',
                    to: { name: 'islands' }
                }
            ]
        }
    }
}
</script>
