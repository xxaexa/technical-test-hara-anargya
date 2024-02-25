<script setup>
import { ref, computed } from "vue";
import ListItem from "../list/ListItem.vue";

const props = defineProps({
  dataOne: Array,
  dataTwo: Array,
  placeholder: String,
  filterType: String,
});

const selectedId = ref(null);
const inputValue = ref("");
const showDropdown = ref(false);

const handleInputFocusOrInput = () => {
  showDropdown.value = true;
};

const selectItem = (item) => {
  if (props.filterType === "getCity") {
    selectedId.value = item.id;
  } else if (props.filterType === "getProvince") {
    selectedId.value = item.provinsi_id;
  }

  inputValue.value = item.name;
  showDropdown.value = false;
};

const filteredDataOne = computed(() => {
  if (!inputValue.value) return props.dataOne;
  return props.dataOne.filter((item) =>
    item.name.toLowerCase().includes(inputValue.value.toLowerCase())
  );
});

const filteredDataTwo = computed(() => {
  if (!selectedId.value) return [];

  // 2bag1
  if (props.filterType === "getCity") {
    console.log(selectedId.value);
    return props.dataTwo.filter(
      (item) => item.provinsi_id === selectedId.value
    );
  }
  // 2bag2
  else if (props.filterType === "getProvince") {
    console.log(selectedId.value);
    return props.dataTwo.filter((item) => item.id === selectedId.value);
  }
});
</script>

<template>
  <div
    class="w-full bg-white relative rounded-[10px] overflow-hidden box-shadow h-[200px]"
  >
    <input
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      @focus="handleInputFocusOrInput"
      @input="handleInputFocusOrInput"
      class="outline-none border-b-[1px] px-3 py-1 w-full text-xs"
    />

    <ListItem
      :customClass="'max-h-[150px] text-xs box-shadow pb-2 pt-1 px-3 absolute w-full bg-white'"
      :isVisible="showDropdown"
      :items="filteredDataOne"
      :onItemClick="selectItem"
    />

    <ListItem
      :customClass="'text-xs h-[160px] pb-2 pt-1 px-3'"
      :isVisible="selectedId"
      :items="filteredDataTwo"
    />
  </div>
</template>
