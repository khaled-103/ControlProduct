<template>
  <div>
    <CustomCheckbox class="my-30" input-label="Do you want to sell your product in wholesale ?"/>
    <div style="overflow-x: auto">
      <table class="additions-table general-table">
        <thead>
          <tr>
            <th>Quantity from</th>
            <th>Quantity to</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">SR</span>
            </td>
          </tr>

          <tr>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">SR</span>
            </td>
          </tr>
          <tr>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">SR</span>
            </td>
          </tr>
          <tr>
            <td class="position-relative">
              0 <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              <i class="bi bi-infinity"></i>
              <span class="cell-append">Pcs</span>
            </td>
            <td class="position-relative">
              0 <span class="cell-append">SR</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
th {
  width: 33%;
  min-width: 120px;
}
.my-30{
    margin: 30px 0;
}
.cell-append {
  position: absolute;
  top: 30%;
  right: 18px;
  color: var(--secondery-dark1);
}
.bi-infinity {
  color: var(--secondery-dark1);
}
</style>