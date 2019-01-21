<template>
  <div>
    <div class="app--landing"></div>
    <div class="app--page">
      <app-header></app-header>
      <div class="app--landing_container">
        <h1>A Haute Spa Day</h1>
        <h3>For Your Family Member</h3>
        <p>Our first priority is making sure you and your beloved animal treated to the very best service, as if you were an extended family member.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./Header.vue";

export default {
  name: "LandingPage",
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
  padding: 60px;
  color: white;
}

.app--landing {
  height: 780px;
  background-image: url('~@/assets/home--image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.app--landing_container {
  display: flex;
  flex-direction: column;
  padding: 60px;
  margin: 110px auto;
  flex: 1;
  h1 {
    font-size: 60px;
    color:#4EC4D1;
  }

  h3 {
    font-size: 36px;
    margin-top: 5px;
  }
}
</style>
