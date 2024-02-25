<script setup>
const props = defineProps({
  customClass: String,
  text: String,
});
</script>
<template>
  <p :class="`text-xs font-semibold ${customClass}`">{{ text }}</p>
</template>
