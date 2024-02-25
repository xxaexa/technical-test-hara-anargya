<script setup>
import TableText from "./../text/TableText.vue";
import SmallText from "../text/SmallText.vue";
import ActionButton from "./../button/ActionButton.vue";

import { formatDate } from "../../utils/formatDate";
import { ref, computed } from "vue";

const props = defineProps({
  headers: Array,
  rows: Object,
  title: String,
  handleClick: Function,
  rowsType: String,
});

const currentPage = ref(1);
const itemsPerPage = ref(10);

const sortType = ref("ascending");
const sortColumn = ref("id");

const displayedRows = computed(() => {
  let sortedRows = [...props.rows];

  sortedRows.sort((a, b) => {
    let valueA = a[sortColumn.value];
    let valueB = b[sortColumn.value];

    if (sortColumn.value === "name") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (sortType.value === "ascending") {
      return valueA < valueB ? -1 : 1;
    } else {
      return valueA > valueB ? -1 : 1;
    }
  });

  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return sortedRows.slice(start, end);
});
const totalPage = computed(() => {
  return Math.ceil(props.rows.length / itemsPerPage.value);
});

const sortByIdAsc = () => {
  sortColumn.value = "id";
  sortType.value = "ascending";
};

const sortByIdDesc = () => {
  sortColumn.value = "id";
  sortType.value = "descending";
};

const sortByNameAsc = () => {
  sortColumn.value = "name";
  sortType.value = "ascending";
};

const sortByNameDesc = () => {
  sortColumn.value = "name";
  sortType.value = "descending";
};
</script>
<template>
  <div>
    <div class="box-shadow rounded-t-[10px]">
      <TableText :text="title" />
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <!--1bag2  -->
          <thead class="text-gray-700">
            <tr v-if="rowsType === 'api'" class="border-t-2">
              <th
                scope="col"
                v-for="header in headers"
                :key="header.id"
                class="px-2 py-3 relative"
              >
                <SmallText :text="header.name" customClass="text-[#7C7C7C]" />
              </th>
            </tr>

            <!-- 2bag3 -->
            <tr v-else class="border-t-2">
              <th scope="col" class="h-2 relative text-center">
                <SmallText text="ID" customClass="text-[#7C7C7C]" />

                <!-- up -->
                <button
                  @click="sortByIdAsc"
                  class="text-[#7C7C7C] absolute top-1 left-8"
                >
                  <Icon icon="akar-icons:triangle-up-fill" />
                </button>

                <!-- down -->
                <button
                  @click="sortByIdDesc"
                  class="text-[#7C7C7C] absolute top-5 left-8"
                >
                  <Icon icon="akar-icons:triangle-down-fill" />
                </button>
              </th>
              <th scope="col" class="px-2 py-3 relative">
                <SmallText text="Nama" customClass="text-[#7C7C7C]" />

                <!-- up -->
                <button
                  @click="sortByNameAsc"
                  class="text-[#7C7C7C] absolute top-1 left-10"
                >
                  <Icon icon="akar-icons:triangle-up-fill" />
                </button>

                <!-- down -->
                <button
                  @click="sortByNameDesc"
                  class="text-[#7C7C7C] absolute top-5 left-10"
                >
                  <Icon icon="akar-icons:triangle-down-fill" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <!--1bag2  -->
            <tr
              v-if="rowsType === 'api'"
              class="bg-white border-t-2 align-middle"
              v-for="row in rows.users"
              :key="row.id"
            >
              <th
                scope="row"
                class="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <SmallText
                  :text="row.id.toString()"
                  customClass="text-[#686868]"
                />
              </th>
              <td class="p-2 flex gap-2 items-center align-middle">
                <img
                  :src="row.profile_picture"
                  alt="profile_picture"
                  class="w-6 h-6 rounded-full"
                />
                <SmallText
                  :text="row.first_name + row.last_name"
                  customClass="text-[#080808]"
                />
              </td>
              <td class="p-2 align-middle">
                <SmallText
                  :text="formatDate(row.date_of_birth)"
                  customClass="text-[#686868]"
                />
              </td>
              <td class="p-2 align-middle">
                <SmallText :text="row.email" customClass="text-[#080808]" />
              </td>
              <td class="p-2 align-middle">
                <SmallText :text="row.job" customClass="text-[#686868]" />
              </td>
              <td class="p-2 align-middle">
                <SmallText :text="row.country" customClass="text-[#080808]" />
              </td>
              <td class="p-2 flex gap-2 align-middle">
                <ActionButton text="Select" />
                <ActionButton
                  @click="() => handleClick(row.id)"
                  text="View Detail"
                />
              </td>
            </tr>

            <!-- 2bag3 -->
            <tr
              v-else
              class="bg-white border-t-2"
              v-for="row in displayedRows"
              :key="row.name"
            >
              <!-- id -->
              <th scope="row" class="w-12 text-center">
                <SmallText
                  :text="row.id.toString()"
                  customClass="text-[#686868]"
                />
              </th>
              <!-- name -->
              <td class="px-2 py-3">
                <SmallText :text="row.name" customClass="text-[#686868]" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- pagination -->
        <div
          v-if="rowsType === 'province'"
          class="w-full flex items-center justify-end"
        >
          <button
            @click="currentPage--"
            :disabled="currentPage <= 1"
            class="p-2"
          >
            <Icon icon="akar-icons:triangle-left-fill" />
          </button>
          <span class="text-sm"
            >Halaman {{ currentPage }} dari {{ totalPage }}</span
          >
          <button
            @click="currentPage++"
            :disabled="currentPage * itemsPerPage >= props.rows.length"
            class="p-2"
          >
            <Icon icon="akar-icons:triangle-right-fill" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
