<template>
  <div>
    <ClientOnly>
      <QuillEditor
        :toolbar="toolbarOptions"
        :placeholder="placeholder"
        theme="snow"
      ></QuillEditor>
    </ClientOnly>
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
const toolbarOptions = [
  ["italic", "bold", "underline"], // toggled buttons
  ["link", "image"],
  [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" },
  ],
];
defineProps(["placeholder"]);
</script>

<style>
.ql-container,
.ql-editor,
.ql-toolbar {
  border: none !important;
}
.ql-editor,
.ql-toolbar {
  background-color: var(--primary-dark3);
}

.ql-toolbar .ql-stroke {
  fill: none;
  stroke: var(--secondery-dark1);
}

.ql-toolbar .ql-fill {
  fill: var(--secondery-dark1);
  stroke: none;
}

.ql-toolbar .ql-picker,
.ql-editor,
.ql-editor.ql-blank::before {
  color: var(--secondery-dark1);
}
.ql-editor {
  border-radius: 0 0 10px 10px;
  min-height: 200px;
}
.ql-toolbar {
  border-radius: 10px 10px 0 0;
}

@media (min-width: 800px) {
  .ql-editor {
    min-width: 400px;
  }
}
</style>