<template>
  <span
    :class="['badge', { 'bg-blue': !transparent }]"
    class="d-flex justify-content-center align-items-center"
    ><span class="badge-content" :class="[{ 'text-secondery': transparent }]"
      >{{ content }} <i v-if="appendIcon" :class="['bi', appendIcon]"></i></span
    ><i class="pointer bi bi-x-lg"></i
  ></span>
</template>

<script setup>
defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
  },
  appendIcon: { type: String, default: "" },
});
</script>

<style scoped>
.badge {
  padding: 8px 14px;
  min-height: 40px;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid var(--secondery-dark1);
}

.bg-blue {
  background-color: var(--primary-blue);
}
.badge-content {
  margin-right: 13px;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
}
.text-secondery {
  color: var(--secondery-dark1);
}
.badge-content i {
  margin-left: 10px;
}
.bi-x-lg {
  font-size: 18px;
}
</style>