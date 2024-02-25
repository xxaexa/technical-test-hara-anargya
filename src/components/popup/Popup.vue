<script setup>
import { defineProps, defineEmits, computed } from "vue";
import ActionButton from "./../button/ActionButton.vue";
import RegularText from "./../text/RegularText.vue";
import TitleText from "./../text/TitleText.vue";
import { formatDate } from "../../utils/formatDate";

const props = defineProps({
  modelValue: Boolean,
  selectedData: Object,
});

const emit = defineEmits(["update:modelValue"]);

const isVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const close = () => {
  isVisible.value = false;
};
</script>

<template>
  <!-- 1bag3  -->
  <transition name="fade">
    <div v-if="isVisible" class="popup-overlay z-50" @click="close">
      <div class="popup-content" @click.stop>
        <ActionButton
          @click="close"
          text="X"
          customClass="text-xl text-red-500 text-left absolute top-0 right-0"
        />
        <div v-if="selectedData" class="flex flex-row gap-3">
          <img
            :src="selectedData.user?.profile_picture"
            alt="profile_picture"
            class="w-[150px] h-[150px] rounded-full"
          />
          <div>
            <TitleText
              :text="`${selectedData.user?.first_name} ${selectedData.user?.last_name}`"
            />
            <RegularText :text="selectedData.user?.email" />
            <RegularText :text="selectedData.user?.phone" />
            <RegularText :text="selectedData.user?.street" />
            <RegularText :text="selectedData.user?.city" />
            <RegularText :text="selectedData.user?.street" />
            <RegularText :text="selectedData.user?.country" />
            <RegularText :text="selectedData.user?.state" />
            <RegularText :text="selectedData.user?.zipcode" />
            <RegularText :text="formatDate(selectedData.user?.date_of_birth)" />
            <RegularText :text="selectedData.user?.gender" />
            <RegularText :text="selectedData.user?.job" />
          </div>
        </div>

        <div v-else>
          <p>Loading data...</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
