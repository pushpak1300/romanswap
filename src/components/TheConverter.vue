<template>
  <div class="h-4/5 px-4 lg:px-6">
    <div class="sm:flex sm:justify-center sm:items-center">
      <div class="sm:w-1/3 text-center">
        <label for="number" class="block text-2xl font-semibold text-primary"
          >Number</label
        >
        <div class="mt-2 text-center">
          <input
            id="number"
            v-model="number"
            type="number"
            class="
              shadow-sm
              text-center
              focus:ring-primary focus:border-primary
              w-full
              text-xl
              border-primary
              rounded-md
            "
            autofocus
            placeholder="12345"
            aria-describedby="number-description"
            max="9999999"
            min="1"
          />
        </div>
        <p
          id="number-description"
          class="mt-2 text-lg sm:text-sm font-medium text-primary"
        >
          Max: {{ maXValue }}
        </p>
      </div>
    </div>
    <div class="sm:px-24 py-16 text-center">
      <div class="text-3xl sm:text-left sm:font-semibold">
        Roman equivalent is:
      </div>
      <div
        class="text-5xl sm:text-9xl sm:text-center font-extrabold my-5 sm:my-2"
      >
        {{ romanValue }}
      </div>
      <div class="text-2xl sm:text-right my-4 sm:my-1">
        <div>
          Roman value of <br class="block sm:hidden" />
          <span class="font-semibold">{{ number }}</span> is
          <span class="font-semibold">{{ romanValue }}</span>
        </div>

        <div
          class="underline cursor-pointer select-none"
          @click="toogleInfoCard"
        >
          More Info <InformationCircleIcon class="h-6 w-6 inline-block" />
        </div>
      </div>
      <TheInfoCard ref="infoCard" />
    </div>
  </div>
</template>

<script lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/outline";
</script>

<script lang="ts" setup>
import { RomanConverter } from "../utils/RomanConverter";
import { ref, computed } from "vue";
import TheInfoCard from "./TheInfoCard.vue";

const defaultValue = 30;
const maXValue = 3999;
const number = ref<number>(defaultValue);

const infoCard = ref<InstanceType<typeof TheInfoCard>>();

const toogleInfoCard = () => {
  (infoCard.value as any)?.toggle();
};

const romanValue = computed((): string => {
  if (!number.value || number.value < 1 || number.value > maXValue) {
    return "NA";
  }
  return RomanConverter.convert(number.value);
});
</script>
