<template>
  <BaseProductsSection title="product picture">
    <template #section-actions>
      <div class="d-flex">
        <div class="d-flex switch">
          <span class="text-light switch-label">Online shop</span>
          <SwitchToggle />
        </div>
        <div class="d-flex switch">
          <span class="text-light switch-label">Cashier</span>
          <SwitchToggle />
        </div>
      </div>
    </template>
    <div class="d-flex flex-wrap">
      <ProductPictureUpload
        v-for="i in 11"
        :key="i"
        :type="i == 1 ? 'video' : 'picture'"
        :id="'picture' + i"
      />
    </div>
    <p class="instruction text-light">
      you can select one picture and one youtube video as main
    </p>
    <p class="text-light">
      Allowed JPG, GIF or PNG , 500*500 pixle Maximum 3 mb
    </p>
  </BaseProductsSection>
</template>

<script setup>
</script>

<style scoped>
.switch-label {
  margin-right: 13px;
}
.switch:first-child {
  margin-right: 33px;
}
.text-light {
  color: var(--white-light);
}
p.instruction {
  margin: 8px 0 10px 0;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

</style>