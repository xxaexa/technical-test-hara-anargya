<script setup>
import Box from "../components/box/Box.vue";
import Table from "./../components/table/Table.vue";
import Popup from "../components/popup/Popup.vue";
import { fetchDataFromApi } from "../utils/api";
import { ref, onMounted, computed } from "vue";

const isPopupVisible = ref(false);
const selectedId = ref(null);
const selectedData = ref(null);
const rows = ref(null);

const headers = [
  { name: "ID" },
  { name: "User" },
  { name: "Date of birth" },
  { name: "Email" },
  { name: "Job" },
  { name: "Country" },
  { name: "Action" },
];

const handleClick = async (id) => {
  selectedId.value = id;
  await fetchDataById(id);
  console.log(id);
  isPopupVisible.value = true;
};

const filteredRow = computed(() => {
  if (!rows.value || !selectedId.value) return null;
  return rows.value.find((row) => row.id === selectedId.value);
});

// fetch single data
const fetchDataById = async (id) => {
  try {
    const apiUrl = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
    selectedData.value = await fetchDataFromApi(apiUrl);
  } catch (error) {
    console.error("Error loading data: ", error);
  }
};

// fetch all data
const loadData = async () => {
  try {
    const apiUrl = "https://api.slingacademy.com/v1/sample-data/users";
    rows.value = await fetchDataFromApi(apiUrl);
  } catch (error) {
    console.error("Error loading data: ", error);
  }
};

onMounted(loadData);
</script>

<template>
  <div class="flex flex-col pr-10 mt-24">
    <div class="w-full flex flex-row gap-8">
      <Box title="2.480," span="30" content="2.15%" condition="up" />
      <Box title="84.310" content="1.10%" condition="down" />
      <Box title="12.155" content="2.15%" condition="up" />
    </div>
    <div class="mt-12">
      <Table
        v-if="rows"
        title="User List"
        :headers="headers"
        :rows="rows"
        :handleClick="handleClick"
        rowsType="api"
      ></Table>
      <div v-else>Loading data...</div>
    </div>

    <Popup v-model="isPopupVisible" :selectedData="selectedData"> </Popup>
  </div>
</template>
