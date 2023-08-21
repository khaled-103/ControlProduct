<template>
  <BaseProductsSection title="attachment">
    <div class="d-flex">
      <div class="d-flex align-items-center">
        <input type="radio" name="attachment" value="link" />
        <label class="link-label">add links</label>
      </div>
      <div class="d-flex align-items-center">
        <input checked type="radio" name="attachment" value="file" />
        <label>add file</label>
      </div>
    </div>
    <div>
      <h4 class="add-files-text">Add Files To be downloaded</h4>
      <DragUploadFile
        @removeFile="removeFile"
        @uploadFiles="uploadFiles"
      ></DragUploadFile>
      <div class="font-size-12 mt-10 text-capitalize text-secondery">
        accepted file : png,jpg,pdf,word,ppt,zip,rar
      </div>
      <div class="font-size-12 max-size text-capitalize text-secondery">
        maximum size : 500 mB
      </div>
      <span v-if="filesUploaded.length == 0" class="text-light text-capitalize"
        >no file choosen</span
      >
      <template v-else>
        <div v-for="file in filesUploaded" :key="file.id" class="d-flex mt-10">
          <span class="text-light">{{ file.name }}</span>
          <i class="bi bi-check-circle"></i>
          <i
            class="bi bi-x-circle-fill text-danger pointer"
            @click="removeFile(file.id)"
          ></i>
        </div>
      </template>
    </div>
  </BaseProductsSection>
</template>

<script setup>
const filesUploaded = ref([]);
/**
 * @param {array} files
 */
function uploadFiles(files) {
  files.forEach((file) => {
    filesUploaded.value.push(file);
  });
}
/**
 * @param {int} id
 */
function removeFile(id) {
  filesUploaded.value = filesUploaded.value.filter((file) => {
    return file.id != id;
  });
}
</script>

<style scoped>
.text-secondery {
  color: var(--secondery-dark1);
}
.text-pimary-blue {
  color: var(--primary-blue);
}
.font-size-12 {
  font-size: 12px;
}
.mt-10 {
  margin-top: 10px;
}
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  border: 1px solid var(--primary-blue);
  border-radius: 50%;
  background-color: transparent;
  position: relative;
}

input[type="radio"]:checked::before {
  content: "";
  display: block;
  width: 18px;
  height: 18px;
  background-color: var(--primary-blue);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
label {
  text-transform: capitalize;
  margin-left: 10px;
  font-weight: 500;
  color: var(--white-light);
}
.link-label {
  margin-right: 60px;
}

h4.add-files-text {
  color: var(--white-light);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin: 40px 0 10px 0;
}

.max-size {
  margin: 5px 0 10px 0;
}
.bi-check-circle {
  color: #34b53a;
  margin: 0 10px 0 10px;
}
</style>