<template>
  <div class="add-property d-flex">
    <i class="pointer bi bi-plus-square"></i>
    <span class="text-capitalize">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>

<style scoped>
.add-property {
  margin-top: 17px;
  color: var(--white-light);
}
.bi-plus-square {
  margin-right: 10px;
  color: var(--primary-blue);
}
</style>