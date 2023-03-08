<script>
    export default {
        name: 'AppHeader'
    }
</script>

<template>
    <header>
        <div class="ms-container d-flex justify-content-between">
            <router-link :to="{ name: 'homepage' }" class="text-decoration-none text-white">
                My portfolio
            </router-link>

            <nav class="menu">
                link
            </nav>
        </div>
    </header>
</template>

<style scoped>
    header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        filter: drop-shadow(0px -8px 8px white);
        height: 70px;
        line-height: 70px;
        background-color: black;
        color: white;
    }
</style>