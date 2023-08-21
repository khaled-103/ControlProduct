<template>
  <div class="position-relative">
    <a @click="onClickSelectBtn" class="btn btn-select" role="button">
      {{ resultSelect }}</a
    >

    <div class="d-flex flex-wrap holder-categories mt-1">
      <transition>
        <ul v-show="showMainCategory" class="main-category">
          <li
            @click="onClickMainCat(mainCat)"
            v-for="mainCat in mainCategories"
            :key="mainCat.id"
          >
            <a class="btn control-dropdown" role="button">{{ mainCat.name }}</a>
          </li>
        </ul>
      </transition>
      <transition>
        <ul v-if="mainCategorySelected && showSubCategory" class="sub-cat mx-1">
          <li class="btnno-hover">
            <a class=""><AddMore text="add Secondary" /></a>
          </li>
          <li class="no-hover">
            <a class=""
              ><div class="d-flex align-items-center">
                <input
                  class="form-control flex-grow-1"
                  type="text"
                  placeholder="Write A New Class"
                />
                <span class="d-flex justify-content-center align-items-center">
                  <span class="mt-1 me-1">En</span>
                  <span class="d-flex flex-column">
                    <i class="pointer bi bi-caret-up-fill"></i>
                    <i class="pointer bi bi-caret-down-fill"></i>
                  </span>
                  <CustomCheckbox />
                </span></div
            ></a>
          </li>
          <li
            @click="onClickSubCategory(subCat)"
            v-for="subCat in mainCategorySelected.subCategories"
            :key="subCat.id"
          >
            <a class="colseable"
              ><div class="d-flex justify-content-between">
                <span class="flex-grow-1">{{ subCat.name }}</span>
                <i class="bi bi-x-lg"></i></div
            ></a>
          </li>
        </ul>
      </transition>
      <transition>
        <ul
          v-if="subCategorySelected && showMinorCategory"
          class="minor-cat mx-1"
        >
          <li class="no-hover">
            <a class=""><AddMore text="add minor" /></a>
          </li>
          <li class="no-hover">
            <a class=""
              ><div class="d-flex align-items-center">
                <input
                  class="form-control flex-grow-1"
                  type="text"
                  placeholder="Write A New Class"
                />
                <span class="d-flex justify-content-center align-items-center">
                  <span class="mt-1 me-1">En</span>
                  <span class="d-flex flex-column">
                    <i class="pointer bi bi-caret-up-fill"></i>
                    <i class="pointer bi bi-caret-down-fill"></i>
                  </span>
                  <CustomCheckbox />
                </span></div
            ></a>
          </li>
          <li
            @click="minorCategorySelected = minorCat"
            v-for="minorCat in subCategorySelected.minorCategories"
            :key="minorCat.id"
          >
            <a class="colseable"
              ><div class="d-flex justify-content-between">
                <span class="flex-grow-1">{{ minorCat.name }}</span>
                <i class="bi bi-x-lg"></i></div
            ></a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
  
  <script setup>
const showMainCategory = ref(false);
const showSubCategory = ref(false);
const showMinorCategory = ref(false);

const mainCategorySelected = ref(null);
const subCategorySelected = ref(null);
const minorCategorySelected = ref(null);

const resultSelect = computed(() => {
  let result = "please select category";
  if (mainCategorySelected.value) result = mainCategorySelected.value.name;
  if (subCategorySelected.value)
    result = result + " > " + subCategorySelected.value.name;
  if (minorCategorySelected.value)
    result = result + " > " + minorCategorySelected.value.name;
  return result;
});
const mainCategories = ref([
  {
    id: parseInt(Math.random() * 2000),
    name: "Beauty & jewelry",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
  {
    id: parseInt(Math.random() * 2000),
    name: "Supermarket",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
  {
    id: parseInt(Math.random() * 2000),
    name: "fashion world",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
  {
    id: parseInt(Math.random() * 2000),
    name: "home & decoration",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
  {
    id: parseInt(Math.random() * 2000),
    name: "home & decoration",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
  {
    id: parseInt(Math.random() * 2000),
    name: "electronic devices",
    subCategories: [
      {
        id: parseInt(Math.random() * 2000),
        name: "wigs",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "hair styling",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
      {
        id: parseInt(Math.random() * 2000),
        name: "shampoo products",
        minorCategories: [
          {
            id: parseInt(Math.random() * 2000),
            name: "wigs",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "hair styling",
          },
          {
            id: parseInt(Math.random() * 2000),
            name: "shampoo products",
          },
        ],
      },
    ],
  },
]);

function onClickMainCat(mainCategory) {
  showSubCategory.value = true;
  showMinorCategory.value = true;
  showMainCategory.value = true;
  if (mainCategory == mainCategorySelected.value) {
    mainCategorySelected.value = null;
  } else {
    mainCategorySelected.value = mainCategory;
    if (window.innerWidth < 650) showMainCategory.value = false;
  }
  subCategorySelected.value = null;
  minorCategorySelected.value = null;
}
function onClickSubCategory(subCat) {
  if (subCat == subCategorySelected.value) subCategorySelected.value = null;
  else {
    subCategorySelected.value = subCat;
    if (window.innerWidth < 900) showSubCategory.value = false;
  }
  minorCategorySelected.value = null;
}
function onClickSelectBtn() {
  let showing = !(
    showMainCategory.value ||
    showSubCategory.value ||
    showMinorCategory.value
  );
  showMainCategory.value = showing;
  showMinorCategory.value = showing;
  showSubCategory.value = showing;
}
</script>
  
  <style scoped>
.holder-categories {
  position: absolute;
  top: 60px;
}
.dropdown {
  max-width: 450px;
}
.btn-select {
  background-image: url("/images/arrow-down.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1rem auto;
  max-width: 450px;
  text-transform: capitalize;
}

ul {
  padding: 0;
  margin: 0;
  min-width: 250px;
  top: 5px;
  z-index: 100;
  margin-bottom: 7px;
  height: auto;
}

a,
ul {
  background-color: var(--primary-dark3);
}
a,
a:focus {
  box-shadow: none;
}

a,
li {
  height: 60px;
  display: flex;
  align-items: center;
  border: none;
  color: var(--white-light);
  transition: all 0.25s;
  cursor: pointer;
  width: 100%;
}
a:hover,
li:hover {
  background-color: var(--primary-blue);
}

.main-category > li a {
  background-image: url("/images/arrow-right.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1rem auto;
}

a.colseable {
  display: block;
  line-height: 50px;
}

a:hover {
  background-color: var(--primary-blue);
  color: var(--white-light);
}
li.no-hover:hover a {
  background-color: var(--primary-dark2);
  color: var(--white-light);
}

.control-dropdown {
  background-image: url("/images/arrow-right.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1rem auto;
}
li a {
  border-bottom: 0.5px solid #a4b4cb80;
}

input,
input:focus {
  border: none;
  box-shadow: none;
  background-color: transparent;
  color: var(--white-light);
}
i.bi-caret-up-fill,
i.bi-caret-down-fill {
  width: 14px;
  height: 14px;
  margin-right: 10px;
  color: var(--secondery-dark1);
}

i.bi-x-lg {
  color: #cd1717;
  font-size: 20px;
}

.sub-cat li a,
.minor-cat li a {
  text-decoration: none;
  padding: 0 10px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
  transform: translateX(0);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>