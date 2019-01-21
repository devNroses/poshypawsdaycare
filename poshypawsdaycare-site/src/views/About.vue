<template>
  <div class="app--page">
    <app-header></app-header>
    <h1>About</h1>
  </div>
</template>

<script lang="ts">
import Header from "@/modules/home/_components/Header.vue";

export default {
  name: "About",
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss" scoped>
.app--page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid blue;
  padding: 30px;
}
</style>
