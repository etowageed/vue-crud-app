<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-slate-800 text-white font-bold p-5 flex justify-center space-x-5">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/people">People</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
