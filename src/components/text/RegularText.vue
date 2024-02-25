<script setup>
const props = defineProps({
  style: String,
  text: String,
});

const defaultStyle = "text-base font-medium";
</script>
<template>
  <p :class="[defaultStyle, style]">{{ text }}</p>
</template>
