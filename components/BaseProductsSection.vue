<template>
  <section>
    <div class="d-flex justify-content-between flex-wrap">
      <h2 class="text-light section-title">{{ title }}</h2>
      <slot name="section-actions" />
    </div>
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps(["title"]);
</script>

<style scoped>
.section-body {
  margin-top: 22px;
  background-color: var(--primary-dark1);
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 30px 10px 30px 30px;
}
.section-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}
</style>