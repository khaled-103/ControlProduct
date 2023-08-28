<template>
  <div class="picture-holder">
    <input
      :accept="fileAccept"
      type="file"
      label="File input"
      :id="'file-input' + id"
      :disabled="forReading"
      class="hide-file-input"
      @change="uploadFile($event)"
    />
    <label :for="'file-input' + id" class="picture file-label">
      <img :src="srcIfForReading" v-if="forReading" alt="" />
      <template v-if="!forReading">
        <img v-show="showPreviewImage" class="previewImage" :id="id" />
        <span
          class="previewVideo d-inline-block text-truncate"
          v-if="fileUpload && type == 'video'"
          >{{ fileUpload.name }}</span
        >
        <div v-show="showLoading" class="loader-holder">
          <div class="loader"></div>
          <div class="loader-text">Uploading File</div>
        </div>

        <template v-if="!fileUpload">
          <svg
            v-if="type == 'video'"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20.8833 34.0333H10.35C5.08333 34.0333 3.33333 30.5333 3.33333 27.0167V12.9833C3.33333 7.71667 5.08333 5.96667 10.35 5.96667H20.8833C26.15 5.96667 27.9 7.71667 27.9 12.9833V27.0167C27.9 32.2833 26.1333 34.0333 20.8833 34.0333Z"
              stroke="#A4B4CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.5333 28.5L27.9 25.25V14.7333L32.5333 11.4833C34.8 9.9 36.6667 10.8667 36.6667 13.65V26.35C36.6667 29.1333 34.8 30.1 32.5333 28.5Z"
              stroke="#A4B4CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.1667 18.3333C20.5474 18.3333 21.6667 17.214 21.6667 15.8333C21.6667 14.4526 20.5474 13.3333 19.1667 13.3333C17.786 13.3333 16.6667 14.4526 16.6667 15.8333C16.6667 17.214 17.786 18.3333 19.1667 18.3333Z"
              stroke="#A4B4CB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M15 16.6667C16.841 16.6667 18.3334 15.1743 18.3334 13.3333C18.3334 11.4924 16.841 10 15 10C13.1591 10 11.6667 11.4924 11.6667 13.3333C11.6667 15.1743 13.1591 16.6667 15 16.6667Z"
              stroke="#A4B4CB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.6666 3.33333H15C6.66665 3.33333 3.33331 6.66667 3.33331 15V25C3.33331 33.3333 6.66665 36.6667 15 36.6667H25C33.3333 36.6667 36.6666 33.3333 36.6666 25V16.6667"
              stroke="#A4B4CB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.25 8.33333H35.4167"
              stroke="#A4B4CB"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M30.8333 12.9167V3.75"
              stroke="#A4B4CB"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4.45001 31.5833L12.6667 26.0667C13.9833 25.1833 15.8833 25.2833 17.0667 26.3L17.6167 26.7833C18.9167 27.9 21.0167 27.9 22.3167 26.7833L29.25 20.8333C30.55 19.7167 32.65 19.7167 33.95 20.8333L36.6667 23.1667"
              stroke="#A4B4CB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </template>
    </label>
    <span v-if="fileUpload" @click="fileUpload = null" class="pointer delete"
      >Delete</span
    >
  </div>
</template>

<script setup>

const props = defineProps({
  type: { default: "picture" },
  id: String,
  forReading: { default: false, type: Boolean },
  srcIfForReading: { type: String, default: "" },
});
const showLoading = ref(false);
const fileAccept = computed(() => {
  return props.type == "video" ? "video/*" : "image/*";
});
const showPreviewImage = computed(() => {
  return fileUpload.value && props.type == "picture";
});
const fileUpload = ref(null);

function validateFileType() {
  let spliting = fileUpload.value.name.split(".");
  let extension = spliting[spliting.length - 1].toLowerCase();
  if (props.type == "picture") {
    if (!["png", "jpg", "gif"].includes(extension)) return false;
  } else if (!["mkv", "mp4", "ogg", "ogv"].includes(extension)) return false;
  return true;
}
function validateImage() {
  const img = document.createElement("img");
  const objectURL = URL.createObjectURL(fileUpload.value);
  img.src = objectURL;

  img.onload = function handleLoad() {
    console.log(`Width: ${img.width}, Height: ${img.height}`);

    if (img.width > 500 || img.height > 500) {
      fileUpload.value = null;
      return alert("The image's width or height is greater than 500px");
    }
  };
  // document.body.appendChild(img);
  if (fileUpload.value.size > 3000000) {
    fileUpload.value = null;
    return alert("Allowed JPG, GIF or PNG ,  500*500 pixle Maximum 3 mb");
  }
}
function validateFile() {
  if (!validateFileType()) {
    fileUpload.value = null;
    alert("not valid file type extinsion");
    return false;
  }
  if (props.type == "picture") validateImage();
}

function uploadFile($event) {
  fileUpload.value = $event.target?.files[0];
  /**
   * ? validate files
   */
  validateFile();
  if (props.type == "picture")
    document.getElementById(props.id).src = fileUpload.value
      ? URL.createObjectURL(fileUpload.value)
      : "";
  showLoading.value = true;
  setTimeout(() => {
    showLoading.value = false;
  }, 1000);
}
</script>

<style scoped>
.picture-holder {
  margin-right: 20px;
  margin-bottom: 10px;
}
.picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: var(--primary-dark3);
  border-radius: 10px;
  position: relative;
}
.icon {
  color: var(--white-light);
  font-size: 24px;
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

.file-label {
  cursor: pointer;
}
.previewImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.previewVideo {
  color: var(--white-light);
}
.delete {
  color: #cd1717;
}
.loader-holder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(22, 38, 63, 0.83);
  z-index: 15;
}
.loader {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
}
.loader::before {
  content: "";
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary-blue);
  border-bottom-color: transparent;
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-text {
  color: var(--white-light);
  font-size: 8px;
  position: absolute;
  bottom: 10px;
}
</style>