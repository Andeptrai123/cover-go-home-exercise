<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["update:formData", "buy", "back", "error"]);

const count = ref(0);
</script>

<template>
  <div class="card">
    <p>Your age is over out accepted limit</p>
    <p>We are sorry, but we can't insure you now</p>
    <button type="button" @click="$emit('back')">{{ "OK :(" }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
