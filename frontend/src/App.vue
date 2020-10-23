<template>
  <div id="app">
    <h1>
      Upload Images MEVN
    </h1>
    file={{ file }}
    <form>
      <input type="file" @change="processFile($event)">
      <button type="button" name="filedate" @click="uploadFile">Отправить</button>
    </form>
  </div>
</template>

<script>

import uploadFile from '@/api/files/uploadApi';

export default {
  name: 'App',
  data() {
    return {
      file: {},
    };
  },
  methods: {
    processFile(event) {
      const res = event.target.files[0];
      this.file = res;
    },
    uploadFile() {
      uploadFile.uploadFile(this.file);
    },
  },
};
</script>

<style lang="scss"></style>
