<template>
  <aside ref="sideBar" class="side-bar side-bar-hide">
    <div class="side-bar-conent">
      <h2 class="logo"><i class="bi bi-activity"></i><span class="ms-3">Side Menue</span></h2>
      <ul>
        <li>
          <a :class="{active:sectionId == '#picture'}" href="#picture" class="d-flex"
            ><i class="bi bi-image"></i
            ><span class="ms-3">Picture</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#detail'}" href="#detail" class="d-flex"
            ><i class="bi bi-ticket-detailed"></i
            ><span class="ms-3">Details</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#price'}" href="#price" class="d-flex"
            ><i class="bi bi-cash-coin"></i
            ><span class="ms-3">Price</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#weight'}" href="#weight" class="d-flex"
            ><i class="bi bi-mastodon"></i
            ><span class="ms-3">Weight</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#barcode'}" href="#barcode" class="d-flex"
            ><i class="bi bi-upc-scan"></i
            ><span class="ms-3">Barcode</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#seo'}" href="#seo" class="d-flex"
            ><i class="bi bi-binoculars"></i
            ><span class="ms-3">SEO</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#license'}" href="#license" class="d-flex"
            ><i class="bi bi-person-badge"></i
            ><span class="ms-3">License</span></a
          >
        </li>
        <li>
          <a :class="{active:sectionId == '#attachment'}" href="#attachment" class="d-flex"
            ><i class="bi bi-paperclip"></i
            ><span class="ms-3">Attachment</span></a
          >
        </li>
      </ul>
    </div>
    <i @click="toggleSideBar" class="pointer bi bi-x"></i>
  </aside>
</template>

<script setup>
const sideBar = ref(null);
const route = useRoute();
function toggleSideBar() {
  sideBar.value.classList.toggle("side-bar-show");
  sideBar.value.classList.toggle("side-bar-hide");
}
watch(
  () => {
    return props.toggleSideBar;
  },
  () => {
    toggleSideBar();
  }
);
const props = defineProps(["toggleSideBar"]);
const sectionId = computed(()=>{
  return route.hash || '#picture';
})
</script>

<style scoped>
.logo{
  color: orange;
  font-size: 24px;
  padding-left: 1rem;
  padding: 1rem 0 1rem 1rem;
  border-bottom: 1px solid var(--secondery-dark1);
  font-family: Georgia, 'Times New Roman', Times, serif;
  
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li a {
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0 10px 10px;
  display: block;
  /* font-family: monospace; */
  transition: all .25s;
}
ul li a span{
  color: #f7f7f7;
}
ul li a i{
  color: #fefefe;
}
ul li a:hover {
  background-color:var(--primary-dark3);
}
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(360 / 1920 * 100%);
  overflow: auto;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: var(--primary-dark1);
}
.side-bar-show {
  opacity: 1;
}
.bi-x {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--white-light);
  display: none;
}

@media (max-width: 992px) {
  .side-bar-hide {
    opacity: 0;
    width: 0;
    z-index: -1;
  }
  .side-bar-show {
    width: 300px;
  }
  .bi-x {
    display: block;
  }
}
.active{
  background-color: var(--primary-blue);
  border-left: 2px solid white;
}
</style>