<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <p class="style text-[40px]">{{ text }}</p>
</template>
