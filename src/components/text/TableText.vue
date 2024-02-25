<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <h2 class="text-[17px] font-semibold px-6 py-4 bg-white rounded-t-[10px]">
    {{ text }}
  </h2>
</template>
