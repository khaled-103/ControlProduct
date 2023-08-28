<script setup>
const { locale } = useI18n();
// locale.value = 'ar';
</script>

<template>
  <div>
    <NuxtLink to="/">index</NuxtLink>

    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="ar">ar</option>

      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
