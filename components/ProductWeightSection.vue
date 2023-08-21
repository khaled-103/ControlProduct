<template>
  <BaseProductsSection title="product weight">
    <div class="row justify-content-between">
      <div class="col-md-6 col-12">
        <div class="d-flex holder-weight">
          <span @click="weightAmount++" class="pointer operation">+</span>
          <span class="weight"
            ><input
              type="number"
              class="form-control flex-grow-1 text-center"
              v-model="weightAmount"
            /><span class="weightt-unit">kg</span></span
          >
          <span @click="decrementAmount" class="pointer operation">-</span>
        </div>
        <div class="text-center ms-5 weigth-amount-transform">
          <p style="width: 60%">it’s about {{ weightAmountTransform }} g</p>
        </div>
        <p class="recommendation">
          We recommend you add the best estimate for the weight so you can sell
          it online later if you dont fill it its not mandatory.
        </p>
      </div>
      <div class="col-lg-5 col-md-6 col-12">
        <h4 class="notes-head">Importent Notes</h4>
        <Notes :notes="notes" />
      </div>
    </div>
  </BaseProductsSection>
</template>
  
  <script setup>
const weightAmount = ref(0.5);
const weightAmountTransform = computed(() => {
  return parseFloat(weightAmount.value * 1000).toFixed(2);
});
function decrementAmount() {
  weightAmount.value--;
  if (weightAmount.value < 0) weightAmount.value = 0;
}

const notes = ref([
  {
    id: 1,
    body: "Add resonable weight dont exaggerate",
  },
  {
    id: 2,
    body: "Companies fouc on shipments above 15KG",
  },
  {
    id: 3,
    body: "Most Used Delivery Methods are Kangr / SMSA",
  },
]);
</script>
  
  <style scoped>
.operation {
  width: 60px;
  height: 60px;
  background-color: var(--primary-blue);
  color: var(--white-light);
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.operation:first-child {
  border-radius: 10px 0 0 10px;
}
.operation:last-child {
  border-radius: 0 10px 10px 0;
}
.weight {
  width: 250px;
  display: flex;
  color: var(--white-light);
  align-items: center;
  background-color: var(--primary-dark2);
}
.weightt-unit {
  margin-right: 7px;
}

.weigth-amount-transform {
  color: var(--secondery-dark1);
  font-size: 14px;
  margin-top: 16px;
  text-transform: capitalize;
}

.weight input,
.weight input:focus {
  background: none;
  box-shadow: none;
  border: none !important;
  color: var(--white-light);
}
/* Chrome, Safari, Edge, Opera */
.weight input::-webkit-outer-spin-button,
.weight input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.weight input[type="number"] {
  -moz-appearance: textfield;
}

.recommendation {
  color: var(--white-light);
  margin-top: 38px;
  max-width: 500px;
}

.notes-head {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}
@media (max-width: 400px) {
  .operation {
    width: 50px;
  }
  .weight {
    width: 200px;
  }
}
</style>