<template>
  <div class="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
    <h3 class="mb-2 text-lg font-semibold text-red-700">Something went wrong</h3>
    <p class="text-sm text-red-600">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>