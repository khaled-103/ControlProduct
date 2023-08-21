<template>
  <div class="dropend">
    <a
      class="btn dropdown-item control-dropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"

      >{{ title }}</a
    >
    <ul
      class="sub-category dropdown-menu top-0"
      aria-labelledby="dropdownMenuLink"
    >
      <li class="no-hover">
        <a class="dropdown-item"><AddMore text="add Secondary" /></a>
      </li>
      <li class="no-hover">
        <a class="dropdown-item"
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
      <li>
        <a class="dropdown-item colseable"
          ><div class="d-flex justify-content-between">
            <span class="flex-grow-1">wigs</span>
            <i class="bi bi-x-lg"></i></div
        ></a>
      </li>
      <li>
        <a class="dropdown-item colseable"
          ><div class="d-flex justify-content-between">
            <span class="flex-grow-1">home & decoration</span>
            <i class="bi bi-x-lg"></i></div
        ></a>
      </li>
      <li>
        <a class="dropdown-item colseable"
          ><div class="d-flex justify-content-between">
            <span class="flex-grow-1">baby supplies</span>
            <i class="bi bi-x-lg"></i></div
        ></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>

<style scoped>
.dropend {
  width: inherit;
  position: relative;
  top: 0;
}

ul {
  padding: 0;
  margin: 0;
  min-width: 150px;
}
@media (min-width: 700px) {
  ul {
    width: 200px;
  }
}
@media (min-width: 992px) {
  ul {
    width: 280px;
  }
}
a,
ul {
  background-color: var(--primary-dark3);
}

a {
  height: 60px;
  display: flex;
  align-items: center;
  border: none;
  color: var(--white-light);
  transition: all 0.25s;
  cursor: pointer;
  width: 100%;
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
.sub-category li a,
.control-dropdown {
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
  color: #CD1717;
  font-size: 20px;
}
</style>