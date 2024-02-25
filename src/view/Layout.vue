<script setup>
import Navbar from "../components/navigation/Navbar.vue";
import Sidebar from "../components/navigation/Sidebar.vue";
</script>
<template>
  <div class="flex flex-row gap-6">
    <Navbar />
    <Sidebar />

    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
