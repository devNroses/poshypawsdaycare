<template>
  <div>
    <div class="landingPage--background"></div>
    <div class="landingPage--container">
      <app-header></app-header>
      <div class="landingPage--featureContent">
        <h1>A Haute Spa Day</h1>
        <h3>For Your Family Member</h3>
        <p>Our first priority is making sure you and your beloved animal treated to the very best service, as if you were an extended family member.</p>
      </div>
    </div>

  <div class="landingPage--section">
    <div>
      Image Goes Here
    </div>
    <div>
      text goes here
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
.landingPage--container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 60px;
  color: white;
}

.landingPage--background{
  height: 780px;
  background-image: url('~@/assets/home--image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.landingPage--featureContent{
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

  p{
    width: 375px;
    line-height: 25px;
    margin-top: 15px;
    font-size: 16px;
  }
}

.landingPage--section {
  margin: 20px auto;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  flex: 1;

  div{
    width: 200px;
    height: 200px;
    background-color: dodgerblue;
  }
}
</style>
