<template>
  <div class="price-additional">
    <div class="d-flex">
      <CustomCheckbox />
      <label class="text-light label-addition"
        >Add additional
        <span class="optional">( suits restaurants & cafes)</span></label
      >
    </div>
    <p class="intro">please click to activate the Feature</p>
    <div style="overflow-x: auto">
      <table class="general-table">
        <thead>
          <tr>
            <th>property</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Additions</td>
            <td class="position-relative d-flex align-items-center">
              <div class="flex-grow-1 d-flex">
                <TheBadge content="sugger" />
                <TheBadge content="sugger" transparent />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
          <tr>
            <td>Remove</td>
            <td class="position-relative d-flex align-items-center">
              <div class="flex-grow-1 d-flex">
                <TheBadge content="sugger" />
                <TheBadge content="sugger" transparent />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <AddMore text="Add New Additional" />

    <div style="overflow-x: auto">
      <table class="additions-table general-table">
        <thead>
          <tr>
            <th>property</th>
            <th>options</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">Additions</td>
            <td>sugger</td>
            <td class="position-relative">
              0 <span class="price-unit">SR</span>
            </td>
          </tr>
          <tr>
            <td>sugger</td>
            <td class="position-relative">
              0 <span class="price-unit">SR</span>
            </td>
          </tr>
          <tr>
            <td class="border-bottom-left-10" rowspan="2">remove</td>
            <td>sugger</td>
            <td class="position-relative">
              0 <span class="price-unit">SR</span>
            </td>
          </tr>
          <tr>
            <td>sugger</td>
            <td class="position-relative">
              0 <span class="price-unit">SR</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <PriceTableQuantity></PriceTableQuantity>
  </div>
</template>
  
  <script setup>
</script>
  
  <style scoped>
th {
  width: 40%;
  min-width: 120px;
}
tr:first-child th:first-child {
  width: 20%;
}
.price-additional {
  margin-top: 30px;
  overflow-x: auto;
}
.mb-23 {
  margin-bottom: 23px;
}
.bi-plus {
  font-size: 24px;
  cursor: pointer;
  margin-right: 18px;
}
.label-addition {
  margin: 2px 0 0 10px;
}
p.intro,
.optional {
  color: var(--secondery-dark1);
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 500;
}
p.intro {
  margin: 10px 0 20px 0;
}
.additions-table {
  margin-top: 14px;
}
.additions-table tr:last-child td:first-child {
  border-bottom-left-radius: 0;
}
.border-bottom-left-10 {
  border-bottom-left-radius: 10px;
}

.price-unit {
  position: absolute;
  top: 35%;
  right: 18px;
  color: var(--secondery-dark1);
}
</style>