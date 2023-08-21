<template>
  <BaseProductsSection title="SEO">
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-md-0 mb-5 col-12">
        <p class="intro text-light">
          Add Tags to help the customer quick find your products !
        </p>
        <div class="material">
          <span class="text-light">Material</span>
          <CustomCheckbox class="checkbox" input-label="silicone" />
          <CustomCheckbox
            class="checkbox"
            input-label="plastic"
            :checked="false"
          />
          <CustomCheckbox class="checkbox" input-label="silicone" />
          <CustomCheckbox input-label="plastic" :checked="false" />
        </div>
        <div>
          <span class="text-light">Colors</span>
          <div class="balls">
            <ColorBall class="ball" size="30px" color="#9F457B" />
            <ColorBall class="ball" size="30px" color="#3432BA" />
            <ColorBall class="ball" size="30px" color="#9A5A5A" />
            <ColorBall class="ball" size="30px" color="#CD1717" />
            <ColorBall class="ball" size="30px" color="#FFAA04" />
            <ColorBall class="ball" size="30px" color="#292323" />
            <ColorBall class="ball" size="30px" color="#B1C684" />
            <ColorBall class="ball" size="30px" color="#02B503" />
            <ColorBall class="ball" size="30px" color="#02B503" />
            <ColorBall class="ball" size="30px" color="#D96D92" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-md-0 mb-5 col-12">
        <p class="text-light position-relative intro">
          Once your product is saved it will be automatically added to
          <img class="google-img" src="/images/google.svg" alt="google" />
        </p>
        <div class="input-handler">
          <label class="text-light"
            >Product Title <span class="optional">(opitonal)</span></label
          >
          <input
            type="text"
            placeholder="Kwaidi Phone pro"
            class="text-light title form-control"
          />
          <span class="input-hint">Maximum 70 words</span>
        </div>
        <div class="input-handler">
          <label class="text-light"
            >Product Description Page
            <span class="optional">(opitonal)</span></label
          >
          <textarea
            type="text"
            placeholder="the best mobile for using and easy for all old men and nice to gift for your lovely people"
            class="text-light form-control"
          />
          <span class="input-hint">Maximum 70 words</span>
        </div>
        <div class="input-handler">
          <label class="text-light"
            >Product Link Page <span class="optional">(opitonal)</span></label
          >
          <input
            type="text"
            placeholder="domain.com/kwaidiphone/K093762"
            class="text-light link form-control"
          />
        </div>
        <div class="input-handler">
          <label class="text-light">Google Ads Tags</label>
          <input
            type="text"
            placeholder="Insert the tags here and press enter"
            class="text-light ads form-control"
          />
        </div>
        <div class="d-flex">
          <TheBadge content="Phone" />
          <TheBadge content="kwaidi" />
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-12">
        <div class="google-word text-center">
          <span>
            <span class="google-letter google-letter-blue">g</span>
            <span class="google-letter google-letter-red">o</span>
            <span class="google-letter google-letter-yellow">o</span>
            <span class="google-letter google-letter-blue">g</span>
            <span class="google-letter google-letter-blue">l</span>
            <span class="google-letter google-letter-red">e</span>
          </span>
        </div>
        <div class="phone-pro">Kwaidi Phone pro</div>
        <div class="domain">domain.com/kwaidiphone/K093762</div>
        <p class="text-light text-capitalize">
          the best mobile for using and easy for all old men and nice to gift
          for your lovely people
        </p>
      </div>
    </div>
  </BaseProductsSection>
</template>

<script setup>
</script>

<style scoped>
.intro {
  max-width: 416px;
  text-transform: capitalize;
}
.material {
  margin: 20px 0 30px 0;
}
.checkbox {
  margin-bottom: 15px;
}
.checkbox:first-of-type {
  margin-top: 10px;
}
.balls {
  max-width: 270px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.ball {
  margin-right: 20px;
  margin-bottom: 10px;
}



label {
  margin-bottom: 10px;
}
.input-handler {
  margin-bottom: 20px;
  position: relative;
}

.input-handler input {
  min-height: 60px;
}
textarea {
  height: 111px;
}
input,
input:focus,
textarea,
textarea:focus {
  background-color: var(--primary-dark3);
  box-shadow: none;
  border: none;
}
input.title::placeholder,
textarea::placeholder {
  color: var(--white-light);
}
input.link::placeholder,
input.ads::placeholder {
  color: var(--secondery-dark1);
}
.optional {
  color: var(--secondery-dark1);
}
.input-hint {
  position: absolute;
  bottom: 6px;
  right: 12px;
  font-size: 10px;
  color: var(--secondery-dark1);
}


.google-img {
  position: absolute;
  bottom: -28px;
}
.google-word{
    margin-bottom: 16px;
}
@media (min-width:992px) {
    .google-word{
        margin-top: 144px;
    }
}
.google-letter {
  font-weight: 700;
  line-height: normal;
  font-size: 36px;
}
.google-letter:first-of-type {
  text-transform: capitalize;
}
.google-letter-blue {
  color: #4084f4;
}
.google-letter-red {
  color: #eb4335;
}
.google-letter-green {
  color: #32a852;
}
.google-letter-yellow {
  color: #fcbc07;
}

.phone-pro {
  color: #4084f4;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
}

.domain{
    color: var(--primary-blue);
}
</style>