<!-- src/components/UserInfoPage.vue -->
<script setup lang="ts">
import { computed, ref } from "vue";
import { FormData } from "./types";

const props = defineProps<{
  formData: FormData;
}>();
const emit = defineEmits(["update:formData", "buy", "back", "error"]);
</script>

<template>
  <div class="mb-4">
    <label class="block mb-2">Name : {{ formData.name }}</label>
  </div>
  <div class="mb-4">
    <label class="block mb-2">Age {{ formData.age }}</label>
  </div>

  <div class="mb-4">
    <label class="block mb-2"
      >Where do you live: {{ formData.country.name }}</label
    >
  </div>

  <div class="mb-4 text-xl font-bold">Pakage: {{ formData.package }}</div>
  <div class="mb-4 text-xl font-bold">
    Premium: {{ formData.premium_total }}
  </div>

  <div class="flex justify-between">
    <button type="button" @click="$emit('back')" class="bg-gray-200 px-4 py-2">
      Back
    </button>
    <button
      type="submit"
      @click="$emit('buy')"
      class="bg-blue-500 text-white px-4 py-2"
    >
      Next
    </button>
  </div>
</template>