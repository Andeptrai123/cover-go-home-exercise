<!-- src/components/WelcomePage.vue -->
<script setup lang="ts">
defineEmits(['start']);
</script>

<template>
  <div class="max-w-md mx-auto text-center">
    <h1 class="text-3xl mb-4">Welcome to Insurance Wizard</h1>
    <button @click="$emit('start')" class="bg-blue-500 text-white px-6 py-3 rounded">
      Start
    </button>
  </div>
</template>