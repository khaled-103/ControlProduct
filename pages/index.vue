<template>
  <div>
    <the-side-bar :toggleSideBar="toggleSideBar" ref="sideBar"></the-side-bar>
    <main>
    
      <toggle-side-bar-button @click="toggleSideBar = !toggleSideBar" />
      <ProductsPictureSection id="picture"></ProductsPictureSection>
      <ProductDetailsSection id="detail"></ProductDetailsSection>
      <PriceSection id="price"></PriceSection>
      <ProductWeightSection id="weight"></ProductWeightSection>
      <BarcodeSection id="barcode"></BarcodeSection>
      <SeoSection id="seo"></SeoSection>
      <div class="  d-flex flex-wrap justify-content-center justify-content-md-end">
        <button class="save-button mb-2">Save And Next</button>
        <button class="save-button mb-2">Save Product</button>
        <button class="save-button mb-2">Save and review</button>
      </div>
      <LicenseSection id="license"></LicenseSection>
      <AttachmentSection id="attachment"></AttachmentSection>
      <!-- <select style="background-color: red;" class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      
      <BaseTble>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><span class="d-flex justify-content-between">
              <span>Mark</span>
              <span>Mark</span>

            </span></td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </BaseTble> -->
    </main>
  </div>
</template>

<script setup>
/** control toggle sidebar */
const toggleSideBar = ref(false);
</script>

<style scoped>
main {
  flex-grow: 2;
  background-color: var(--primary-dark2);
  padding: 86px 30px 86px 50px;
  min-height: 100vh;
  margin-left: calc(360 / 1920 * 100%);
}
@media (max-width: 992px) {
  main {
    margin-left: 0;
  }
}
@media (max-width: 760px) {
  main {
    padding: 86px 15px 86px 25px;
  }
}
.save-button {
  border-radius: 10px;
  border: 1px solid var(--primary-blue);
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  color: var(--primary-blue);
  padding: 10px 26px;
  text-transform: capitalize;
  transition: all 0.25s;
}
@media (max-width:600px) {
  .save-button{
    padding: 6px 14px;
  font-size: 15px;
  }
  
}
.save-button:hover {
  background-color: var(--primary-blue);
  color: var(--white-light);
}
.save-button:nth-child(even) {
  margin: 0 30px 0 30px;
}

.table-wrapper {
  max-width: 100%;
  overflow-x: auto;
}

.table-wrapper {
  max-width: 100%;
  overflow-x: auto;
}

.resonsive-table {
  width: 100%;
  border-collapse: collapse;
}

.resonsive-table th,
.resonsive-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.resonsive-table thead {
  position: sticky;
  top: 0;
  background-color: #f1f1f1;
}

.resonsive-table tbody {
  max-height: 300px; /* Adjust as needed */
  overflow-y: auto;
}
</style>