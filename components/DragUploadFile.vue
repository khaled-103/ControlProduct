<template>
  <div class="drag-upload-files" @drop.prevent="drage">
    <span class="d-flex flex-column align-items-center">
      <span class="text-capitalize text-secondery">
        drag and drop here or
      </span>
      <input
        type="file"
        label="File input"
        id="file-input"
        class="hide-file-input"
        @change="uploadFile($event)"
      />
      <label for="file-input" class="text-pimary-blue pointer">
        browse file
      </label>
    </span>
  </div>
</template>

<script setup>
const fileUpload = ref(null);
const emit = defineEmits(["uploadFiles", "removeFile"]);
function uploadFile($event) {
  fileUpload.value = $event.target?.files[0];
  emit("uploadFiles", [
    {
      id: parseInt(Math.random() * 1000),
      name: fileUpload.value.name,
      file: fileUpload.value,
    },
  ]);
  fileUpload.value = null;
}
function drage(evnet) {
  console.log(evnet.dataTransfer.files[0]);
  const uploaded = evnet.dataTransfer.files;
  const files = [];
  for (let i = 0; i < uploaded.length; i++) {
    files.push({
      id: parseInt(Math.random() * 1000),
      name: uploaded[i].name,
      file: uploaded[i],
    });
  }

  emit("uploadFiles", files);
}
function removeFile(id) {
  emit("removeFile", id);
}
const events = ["dragenter", "dragover", "dragleave", "drop"];
function preventDefaults(e) {
  e.preventDefault();
}
onMounted(() => {
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults);
  });
});

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults);
  });
});
</script>

<style scoped>
.drag-upload-files {
  max-width: 500px;
  height: 120px;
  background-color: var(--primary-dark3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drag-upload-files:hover {
  transform: scale(1.01);
}
.text-secondery {
  color: var(--secondery-dark1);
}

.text-pimary-blue {
  color: var(--primary-blue);
}

.hide-file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>