<script setup>
const props = defineProps({
  text: String,
  onClick: Function,
  customClass: String,
});
</script>

<template>
  <button
    @click="onClick"
    :class="`text-[10px] text-[#080808] box-shadow rounded-[4px] px-3 ${customClass}`"
  >
    {{ text }}
  </button>
</template>
