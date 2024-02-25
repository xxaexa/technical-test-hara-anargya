<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  customClass: String,
  isVisible: Boolean,
  items: Array,
  onItemClick: Function,
});

const { customClass, isVisible, items, onItemClick } = toRefs(props);
</script>

<template>
  <ul
    v-if="isVisible && items.length"
    :class="`text-xs overflow-y-scroll p-1 rounded-b-[10px] ${customClass}`"
  >
    <li
      v-for="item in items"
      :key="item.id"
      @click="() => onItemClick(item)"
      class="cursor-pointer"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
