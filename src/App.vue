<script setup>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { initTheme } from './composables/useTheme';

initTheme();
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
