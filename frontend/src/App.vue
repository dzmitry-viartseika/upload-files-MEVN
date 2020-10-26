<template>
  <div id="app">
    <h1>
      Upload Images MEVN
    </h1>
    <fileUpload />
  </div>
</template>

<script>

import fileUpload from '@/components/fileUpload.vue';

export default {
  name: 'App',
  data() {
    return {
      file: '',
    };
  },
  components: {
    fileUpload,
  },
};
</script>

<style lang="scss"></style>
