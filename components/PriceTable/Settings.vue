<template>
  <div class="root">
    <h3 class="intro">product options Price Setteing</h3>
    <div style="overflow-x: auto">
      <table class="general-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Type</th>
            <th>Product Price</th>
            <th class="price-after-discount">price after discount</th>
            <th>barcode</th>
            <th>supplier price</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>hot drinks</td>
            <td>0</td>
            <td class="position-relative">
              <span
                ><span class="discount-apply-all">0</span
                ><span class="apply-all pointer">Apply All</span></span
              >
            </td>

            <td>0</td>
            <td>0</td>
            <td>
              <span class="d-flex px-2"
                ><span class="flex-grow-1 text-start">0</span
                ><span class="d-flex align-items-center"
                  ><CustomCheckbox :checked="false" /><i
                    class="bi bi-infinity"
                  ></i></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>l</td>
            <td>hot drinks</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <span class="pe-2 d-flex justify-content-end"
                ><span class="d-flex align-items-center"
                  ><CustomCheckbox /><i class="bi bi-infinity"></i></span
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <style scoped>
.root {
  margin-top: 20px;
}
.bi-plus {
  font-size: 24px;
  cursor: pointer;
  margin-right: 18px;
}
h3.intro {
  color: var(--white-light);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin: 10px 0 20px 0;
}
td,th {
  min-width: 150px;
}
th.price-after-discount{
  min-width: 180px;
}
td,
th {
  text-transform: capitalize;
}




.apply-all{
  color: var(--primary-blue);
  font-size: 14px;
  position: absolute;
  top: 18px;
  right: 10px;
}
</style>