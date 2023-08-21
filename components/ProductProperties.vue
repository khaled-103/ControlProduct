<template>
  <div class="product-properties">
    <CustomCheckbox class="mb-23" inputLabel="product Properties" />
    <div style="overflow-x: auto">
      <table class="general-table">
        <thead>
          <tr>
            <th>Properties</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Made in</td>
            <td class="position-relative d-flex align-items-center">
              <div class="flex-grow-1 d-flex">
                <TheBadge content="KSA" />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
          <tr>
            <td>Capacity</td>
            <td class="position-relative d-flex align-items-center">
              <div class="d-flex flex-grow-1">
                <TheBadge content="2 GB" /><TheBadge
                  transparent
                  content="5 GB"
                />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <AddMore text="Add More Properties" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.product-properties {
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
</style>