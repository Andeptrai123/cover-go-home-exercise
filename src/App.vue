<!-- src/App.vue -->
<script setup lang="ts">
import { ref, reactive } from "vue";
import WelcomePage from "./components/WelcomePage.vue";
import UserInfoPage from "./components/UserInfoPage.vue";
import { FormData } from "./types";
import SummaryPage from "./components/SummaryPage.vue";
import AgeErrorPage from "./components/AgeErrorPage.vue";

const currentStep = ref<number | "error">(1);
let formData = reactive<FormData>({
  name: "",
  age: 0,
  country: "HKD",
  package: "standard",
  premium_total: 0,
});

const handleNext = () =>
  (currentStep.value = (currentStep.value as number) + 1);
const handleBack = () =>
  (currentStep.value = (currentStep.value as number) - 1);
const handleReset = () => {
  currentStep.value = 1;
  formData = reactive<FormData>({
    name: "",
    age: 0,
    country: "HKD",
    package: "standard",
    premium_total: 0,
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <WelcomePage v-if="currentStep === 1" @start="handleNext" />
    <UserInfoPage
      v-if="currentStep === 2"
      v-model:form-data="formData"
      @next="handleNext"
      @back="handleBack"
      @error="currentStep = 'error'"
    />

    <SummaryPage
      v-if="currentStep === 3"
      :form-data="formData"
      @back="handleBack"
      @buy="handleReset"
    />

    <AgeErrorPage v-if="currentStep === 'error'" @back="handleReset" />
  </div>
</template>