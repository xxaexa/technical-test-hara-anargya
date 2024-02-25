<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  content: String,
  condition: String,
  span: String,
});
</script>
<template>
  <div
    class="bg-[#FFFFFF] w-1/3 rounded-lg box-shadow h-[150px] flex flex-col justify-between"
  >
    <div class="px-6 py-4 flex flex-row justify-between items-center">
      <div>
        <p class="text-xs text-[#727272]">Pending</p>
        <h2 class="text-xl font-semibold">
          {{ title }}
          <span class="text-xl text-[#9A9A9A] mr-1">
            {{ span }}
          </span>
        </h2>
      </div>
      <div class="bg-[#F2F4F7] rounded-[4px]">
        <Icon
          icon="solar:square-transfer-horizontal-broken"
          class="w-6 h-6 text-[#817F7F]"
        />
      </div>
    </div>

    <div class="bg-[#F9FAFC] flex justify-between px-6 py-4 rounded-b-lg">
      <div class="flex flex-row gap-2 items-center">
        <img
          :src="
            condition === 'up'
              ? 'src/assets/icon/ico_arrow_up.svg'
              : 'src/assets/icon/ico_arrow_down.svg'
          "
          alt="arrow icon"
        />

        <p
          :class="{
            'text-green-500': condition === 'up',
            'text-red-500': condition === 'down',
          }"
          class="text-[10px]"
        >
          {{ content }}
        </p>
        <p class="text-[10px] ml-2">Last Month</p>
      </div>
      <p class="text-[10px] cursor-pointer">View More</p>
    </div>
  </div>
</template>
