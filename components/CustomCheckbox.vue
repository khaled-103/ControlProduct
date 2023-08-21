<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      :checked="checked"
    />
    <label v-if="inputLabel" class="form-check-label">
      {{ inputLabel }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  inputLabel: {type:String,default:""},
  checked: { type: Boolean, default: true },
});
</script>

<style scoped>
input[type="checkbox"]{
  background: transparent;
  border: 1px solid var(--primary-blue);
}
input[type="checkbox"]:checked {
  background-color: var(--primary-blue);
}
input[type="checkbox"],
input[type="checkbox"]:checked {
  box-shadow: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
}
label {
  text-transform: capitalize;
  color: var(--white-light);
  margin-left: 10px;
}
</style>