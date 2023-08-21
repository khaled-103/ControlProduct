<template>
  <BaseProductsSection title="price">
    <CustomCheckbox class="mb-20" input-label="Cost Settings"></CustomCheckbox>
    <div class="d-md-flex">
      <div class="flex-grow-1 position-relative me-md-5 input-holder">
        <label>supplier</label>
        <select class="form-select">
          <option selected>choose your supplier please</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="flex-grow-1 mb-20 me-md-5 input-holder">
        <label>supplier price</label>
        <div class="position-relative">
          <input class="form-control" type="number" />
          <span class="input-append">SAR</span>
        </div>
      </div>
    </div>
    <div class="mb-20 input-holder">
      <label class="category-label">sell price</label>
      <div class="position-relative">
        <input class="form-control" type="number" />
        <span class="input-append">SR</span>
      </div>
    </div>
    <CustomCheckbox
      class="mb-20"
      input-label="Are you VAT elegible ?"
    ></CustomCheckbox>
    <div class="d-md-flex">
      <div class="flex-grow-1 position-relative me-md-5 input-holder">
        <label>VAT Type :</label>
        <select class="form-select">
          <option selected>please select</option>
          <option value="1">Standard Rate</option>
          <option value="2">Not subject to vat</option>
          <option value="3">Exempt from Vat</option>
          <option value="3">Zero Rated Goods</option>
        </select>
      </div>

      <div class="flex-grow-1 mb-20 me-md-5 input-holder">
        <label>Vat Rate</label>
        <div class="position-relative">
          <input class="form-control" type="number" />
          <span class="input-append">%</span>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex flex-wrap">
        <CustomCheckbox
          class="checkbox-discount"
          input-label="Do you have a discount ?"
        ></CustomCheckbox>
        <CustomCheckbox
          input-label="apply this product’s offer to all branches?"
        ></CustomCheckbox>
      </div>
      <div>
        <label>Discount Precentage :</label>
        <div class="position-relative input-holder">
          <input class="form-control" type="number" />
          <span class="input-append">%</span>
        </div>
      </div>
      <p class="total-price-note">
        the total price change according to your input
      </p>
      <span class="total-price">total : 0.00</span>
    </div>
    <PriceTableSpecifications></PriceTableSpecifications>
    <PriceTableSettings></PriceTableSettings>
    <PriceTableAdditional></PriceTableAdditional>
  </BaseProductsSection>
</template>

<script setup>
</script>

<style scoped>
@import url("~/assets/css/basicInputs.css");
select {
  color: var(--secondery-dark1);
}
.input-append {
  position: absolute;
  top: 25%;
  right: 20px;
  color: var(--secondery-dark1);
}
.mb-20 {
  margin-bottom: 20px;
}
label{
  margin-top: 22px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.checkbox-discount {
  margin-right: 26px;
}
p.total-price-note {
  color: var(--secondery-dark1);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin: 10px 0;
}
span.total-price {
  color: var(--primary-blue);
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
}
</style>