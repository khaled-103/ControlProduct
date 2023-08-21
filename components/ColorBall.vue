<template>
  <span class="small-ball"></span>
</template>

<script setup>
const props = defineProps(["color", "size"]);
</script>

<style scoped>
.small-ball {
  min-width: v-bind(size);
  min-height: v-bind(size);
  border-radius: 50%;
  background-color: v-bind(color);
  margin-right: 10px;
}
</style>