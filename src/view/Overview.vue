<script setup>
import province from "./../assets/js/province";
import city from "./../assets/js/city";
import Dropdown from "./../components/formRow/Dropdown.vue";
import Table from "./../components/table/Table.vue";
import { ref } from "vue";

const rows = ref(province);

const headers = [
  { id: 1, name: "ID" },
  { id: 2, name: "Name" },
];
</script>

<template>
  <div class="w-full flex flex-row gap-8 mt-24 pr-10">
    <div class="w-1/3 flex flex-col space-y-8">
      <Dropdown
        placeholder="Masukan Nama Provinsi"
        :dataOne="province"
        :dataTwo="city"
        filterType="getCity"
      />
      <Dropdown
        placeholder="Masukan Nama Kota/Kabupaten"
        :dataOne="city"
        :dataTwo="province"
        filterType="getProvince"
      />
    </div>
    <div class="w-1/3 flex flex-col space-y-8">
      <Table title="Province List" :rows="province" rowsType="province"></Table>
    </div>
  </div>
</template>
