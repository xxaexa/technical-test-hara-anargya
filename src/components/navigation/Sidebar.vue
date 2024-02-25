<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomeActive = computed(() => route.path === "/");
const isOverviewActive = computed(() => route.path === "/overview");
</script>
<template>
  <div
    class="h-screen z-10 md:flex flex-col bg-[#FFFFFF] box-shadow pl-10 w-[10px] overflow-hidden md:w-[240px]"
  >
    <h2 class="text-[#152544] text-3xl font-extrabold mt-6 mb-4">heylink.</h2>
    <router-link to="/">
      <div
        :class="{ 'bg-[#E3F2FD]': isHomeActive }"
        class="flex items-center gap-2 px-3 mr-5 duration-200 ease-linear rounded-lg"
      >
        <Icon icon="solar:home-smile-linear" />
        <p class="text-base font-medium text-[#424242] py-1.5">Dashboard</p>
      </div>
    </router-link>

    <!--  -->
    <router-link to="/overview">
      <div
        :class="{ 'bg-[#E3F2FD]': isOverviewActive }"
        class="flex items-center gap-2 px-3 mr-5 duration-200 ease-linear rounded-lg"
      >
        <img
          src="./../../assets/icon/ico_overview.svg"
          alt="ico_overview"
          class="w-3.5"
        />
        <p class="text-base font-medium text-[#424242] py-1.5">Overview</p>
      </div>
    </router-link>
  </div>
</template>
