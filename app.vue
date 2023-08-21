<template>
  <div>
      <NuxtWelcome></NuxtWelcome>
  </div>
</template>
<script setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/bootstrapCss/bootstrap.min.css" },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
    },
  ],
  script: [{ src: "/bootstrapJs/bootstrap.bundle.min.js" }],
});
</script>
<style>
</style>
