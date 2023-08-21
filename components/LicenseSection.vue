<template>
  <BaseProductsSection title="license">
    <p class="license-intro">
      Fill the Codes manually or use paste from clipboard method.
    </p>
    <div class="input-holder">
      <label class="text-light">Liscense Code</label>
      <input
        class="form-control"
        placeholder="ex : 193882190108288"
        type="text"
      />
    </div>
    <div class="input-holder">
      <label class="text-light">Liscense Code</label>
      <div class="d-flex align-items-center">
        <input
          class="form-control"
          placeholder="ex : 193882190108288"
          type="text"
        />
        <i class="pointer bi bi-x-lg"></i>
      </div>
    </div>
    <AddMore text="add more liscense" />
    <div class="license-items">
      <div class="license-item" v-for="i in 8" :key="i">
        <span>Ex : 3452-12WQ-UY77-KJ4F</span>
        <i class="pointer bi bi-x-lg"></i>
      </div>
      <div class="license-info d-flex justify-content-between">
        <span>8 of 20</span>
        <span class="show-more">show more</span>
      </div>
    </div>
    <div>
      <button class="import-license-btn">Import liecnse</button>
    </div>
  </BaseProductsSection>
</template>
    
    <script setup>
</script>
    
<style scoped>
p.license-intro {
  color: var(--white-light);
  text-transform: capitalize;
  max-width: 416px;
}

label {
  margin: 20px 0 10px 0;
}
input,
input:focus {
  background-color: var(--primary-dark3);
  max-width: 500px;
  box-shadow: none;
  border: none;
  color: var(--white-light);
  height: 60px;
}
i.bi-x-lg {
  color: #cd1717;
  margin-left: 20px;
}
.license-items {
  margin-top: 25px;
  max-width: 500px;
}
.license-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondery-dark1);
  margin-bottom: 15px;
}
.license-info {
  color: var(--primary-blue);
}
.show-more {
  cursor: pointer;
  text-decoration: underline;
  text-transform: capitalize;
}
.import-license-btn {
  background-color: var(--primary-blue);
  padding: 12px 28px;
  color: var(--white-light);
  border: none;
  border-radius: 10px;
  margin-top: 30px;
}
</style>