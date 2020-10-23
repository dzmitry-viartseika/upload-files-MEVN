<template>
  <div id="app">
    <h1>
      Upload Images MEVN
    </h1>
    file={{ file }}
    <form>
      <input type="file">
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>

import uploadFile from '@/api/files/uploadApi';

export default {
  name: 'App',
  data() {
    return {
      file: '',
    };
  },
  methods: {
    uploadFile() {
      console.log('wertey');
      uploadFile.uploadFile(this.file);
    },
  },
};
</script>

<style lang="scss"></style>
