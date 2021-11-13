<template>
  <main class="h-4/5 px-4 lg:px-6">
    <div class="sm:flex sm:justify-center sm:items-center">
      <div class="w-1/3 text-center">
        <label for="number" class="block text-2xl font-semibold text-primary"
          >Number</label
        >
        <div class="mt-2 text-center">
          <input
            id="number"
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
          Max: 99999999
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
        XXXXXXXX
      </div>
      <div class="text-2xl sm:text-right my-4 sm:my-1">
        <div>
          Roman value of <br class="block sm:hidden" />
          <span class="font-semibold">30 </span>is
          <span class="font-semibold"> XXXXXXXX</span>
        </div>

        <div class="underline cursor-pointer select-none">
          More Info <InformationCircleIcon class="h-6 w-6 inline-block" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { InformationCircleIcon } from "@heroicons/vue/outline";
</script>
