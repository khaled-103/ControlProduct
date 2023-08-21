<template>
  <BaseProductsSection title="Barcode and Stock">
    <div class="row align-items-center justify-content-between">
      <div class="col-md-6 col-12">
        <p class="text-light barcode-intro">
          If you have a shelf number, store this product in it For easy access
          later in online orders
        </p>
        <div class="input-holder">
          <input class="form-control" type="text" placeholder="ex : A-005">
        </div>
        <div class="input-holder">
          <label for="">product barcode</label>
          <div class="d-flex">
            <input
              class="form-control"
              placeholder="ex : 193882190108288"
              type="text"
            />
            <button>Print</button>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-12 mt-md-0 mt-4">
        <h4 class="text-light">Importent Notes</h4>
        <Notes :notes="notes" />
      </div>
    </div>
  </BaseProductsSection>
</template>

<script setup>
const notes = ref([
  {
    id: 4,
    body: "Barcode printing includes Barcode only",
  },
  {
    id: 5,
    body: "Storage unit shows durning online orders",
  },
  {
    id: 6,
    body: "Product Barcode simplifies searching for the product",
  },
]);
</script>

<style scoped>
@import url('~/assets/css/basicInputs.css');

p.barcode-intro {
  width: 300px;
  margin-bottom: 36px;

  text-transform: capitalize;
}
/* input{
  height: 60px;
}
input,
input:focus {
  max-width: 500px;
  background-color: var(--primary-dark3);
  color: var(--secondery-dark1);
  box-shadow: none;
  border: none;
}*/
label {
  margin-bottom: 10px;
  margin-top: 20px;
} 
button {
  background-color: var(--primary-blue);
  max-width: 150px;
  padding: 12px 48px;
  margin-left: 30px;
  color: white;
  border: none;
  border-radius: 10px;
}
@media (max-width: 600px) {
  button {
    padding: 6px 24px;
  }
}
@media (min-width: 600px) {
  p.barcode-intro {
    width: 416px;
    margin-bottom: 36px;
  }
}
</style>