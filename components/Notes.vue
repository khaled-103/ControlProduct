<template>
  <div class="notes">
    <div class="note" v-for="note in notes" :key="note.id">
      <ColorBall size="15px" color="#3AC2CB"/>
      <span class="flex-grow-1">{{ note.body }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["notes"]);
</script>

<style scoped>
/* .small-ball {
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  background-color: var(--primary-blue);
  margin-right: 10px;
} */
.notes {
  margin-top: 20px;
  color: var(--secondery-dark1);
}
.note {
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
}
.note:last-child{
    margin-bottom: 0;
}
</style>