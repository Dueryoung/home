<template>
  <div class="w-full h-full px-12 py-16">
    <Header />
    layout
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
</script>
