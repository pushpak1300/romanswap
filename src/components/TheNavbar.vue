<template>
  <Disclosure as="nav" class="h-1/5">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="flex-1 flex items-stretch justify-start">
          <TheLogo />
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <button
            id="ShareButton"
            type="button"
            class="
              bg-primary
              p-2
              rounded-full
              text-secondary
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-primary
              focus:ring-secondary
            "
          >
            <span class="sr-only">View notifications</span>
            <ShareIcon class="h-5 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure } from "@headlessui/vue";
import * as ShareIcon from "@heroicons/vue/outline/ShareIcon";
import TheLogo from "./TheLogo.vue";
</script>
