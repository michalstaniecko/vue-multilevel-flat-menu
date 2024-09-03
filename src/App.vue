<script setup>
import menu from './lib/menu.js'
import { flatMenuToMultilevel } from "@/lib/multilevel-menu.js";
</script>

<template>
  <div class="grid">
    <div>
      <h2>Flat menu</h2>
      <pre>{{    menu    }}</pre>
    </div>
    <div>
      <h2>Multi-level menu</h2>
      <pre>{{    flatMenuToMultilevel(menu)    }}</pre>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
