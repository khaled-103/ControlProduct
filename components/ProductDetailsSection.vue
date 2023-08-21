<template>
  <BaseProductsSection title="product details">
    <div class="d-md-flex">
      <div class="flex-grow-1 position-relative me-md-5 input-holder">
        <label>product name</label>
        <input class="form-control" value="italian coffe" type="text" />
        <span
          class="d-flex justify-content-center align-items-center input-name-append text-light"
        >
          <span class="mt-1 me-1">En</span>
          <span class="d-flex flex-column">
            <i class="pointer bi bi-caret-up-fill"></i>
            <i class="pointer bi bi-caret-down-fill"></i>
          </span>
        </span>
      </div>
      <div class="mt-4 mt-md-0 flex-grow-1">
        <label>Brand name <span class="optional">(opitonal)</span></label>
        <select class="form-select" aria-label="Default select example">
          <option selected>please select your brand</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    <!-- <div>
      <label class="category-label">category</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Beauty & jewelry > hair care > wigs</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div> -->
    <label class="category-label">category</label>

    <CategorySelect></CategorySelect>
    <ProductProperties />
    <div class="mt-5">
      <CustomCheckbox input-label="allow notes durning order" />
      <CustomCheckbox
        class="allow-file-checkbox"
        input-label="allow files during order"
      />
      <CustomCheckbox input-label="Add Accesesories" />
    </div>
    <div class="mt-30 d-flex flex-wrap">
      <ProductPictureUpload
        :for-reading="true"
        src-if-for-reading="/images/img1.png"
        :id="'picture' + parseInt(Math.random() * 1000 + 1000)"
      />
      <ProductPictureUpload
        :for-reading="true"
        src-if-for-reading="/images/img2.png"
        :id="'picture' + parseInt(Math.random() * 1000 + 1000)"
      />
      <ProductPictureUpload
        :for-reading="true"
        src-if-for-reading="/images/img3.png"
        :id="'picture' + parseInt(Math.random() * 1000 + 1000)"
      />
      <ProductPictureUpload
        :for-reading="true"
        src-if-for-reading="/images/img4.png"
        :id="'picture' + parseInt(Math.random() * 1000 + 1000)"
      />
    </div>
    <div class="mt-30">
      <CustomCheckbox input-label="add the calories for the product " />
      <div class="kcal-input input-holder">
        <input class="form-control" type="text" />
        <span class="kcal-append"> kcal </span>
      </div>
    </div>
    <div class="mt-30">
      <CustomCheckbox input-label="product Details & return policy" />
      <div class="editors d-flex flex-wrap">
        <div class="editor">
          <label class="text-light" for="">Details text or image 790 pixle</label>
          <Editor
            placeholder="please write or upload and things about your product"
          />
        </div>
        <div class="editor">
          <label class="text-light" for="">Return Policy text or image 790 pixle</label>
          <Editor
            placeholder="please write or upload and things about your product"
          />
        </div>
      </div>
    </div>
  </BaseProductsSection>
</template>

<script setup>
</script>

<style scoped>
@import url('~/assets/css/basicInputs.css');

i.bi-caret-up-fill,
i.bi-caret-down-fill {
  width: 14px;
  height: 14px;
}
.input-name-append {
  position: absolute;
  top: 50%;
  right: 20px;
}
.category-label {
  margin-top: 20px;
}

.allow-file-checkbox {
  margin: 20px 0;
}
.kcal-input {
  position: relative;
  margin-top: 20px;
}
.kcal-append {
  position: absolute;
  top: 30%;
  right: 20px;
  color: var(--secondery-dark1);
}

.mt-30 {
  margin-top: 30px;
}
@media (min-width: 900px) {
  .editor:first-child {
    margin-right: 60px;
  }
}
.editors{
  margin-top: 15px;
  margin-bottom: 26px;
}

.editor{
  margin-top: 5px;
}

</style>