<!-- src/components/UserInfoPage.vue -->
<script setup lang="ts">
import { computed, ref } from "vue";
import { FormData } from "./types";
import { RATES, PACKAGE_MULTIPLIERS } from "../constant";

const props = defineProps<{
  formData: FormData;
}>();
const emit = defineEmits(["update:formData", "next", "back", "error"]);

const localAge = ref(props.formData.age.toString());

const premium = computed(() => {
  if (!props.formData.country.rate) {
    return 0;
  }
  const base = 10 * Number(localAge.value) * props.formData.country.rate;
  props.formData.premium_total =
    base * PACKAGE_MULTIPLIERS[props.formData.package].toFixed(2);
  return base * PACKAGE_MULTIPLIERS[props.formData.package];
});

const handleSubmit = () => {
  const age = parseInt(localAge.value);
  if (age > 100) {
    emit("error");
    return;
  }
  emit("update:formData", { ...props.formData, age });
  emit("next");
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
  >
    <div class="mb-4">
      <label class="block mb-2">Name</label>
      <input
        v-model="formData.name"
        class="border p-2 w-full"
        required
        min="1"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Age</label>
      <input
        v-model="localAge"
        type="number"
        class="border p-2 w-full"
        required
        min="1"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2">Country</label>
      <select required v-model="formData.country" class="border p-2 w-full">
        <option v-for="(item, value) in RATES" :value="item" :key="value">
          {{ item.name }}
        </option>
      </select>
    </div>

    <div class="mb-4">
      <div v-for="(key, pkg) in PACKAGE_MULTIPLIERS" :key="key" class="mb-2">
        <label class="flex items-center">
          <input
            type="radio"
            :value="pkg"
            v-model="formData.package"
            class="mr-2"
          />
          {{ pkg }} (+{{ ((PACKAGE_MULTIPLIERS[pkg] - 1) * 100).toFixed(0) }}%)
        </label>
      </div>
    </div>

    <div class="mb-4 text-xl font-bold">
      Premium: {{ premium.toFixed(2) || 0 }} {{ formData.country.name }}
    </div>

    <div class="flex justify-between">
      <button
        type="button"
        @click="$emit('back')"
        class="bg-gray-200 px-4 py-2"
      >
        Back
      </button>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">
        Next
      </button>
    </div>
  </form>
</template>