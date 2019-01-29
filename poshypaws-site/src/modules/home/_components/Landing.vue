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
      <img src="@/assets/dogGrooming.jpg" alt="Poshy Paws Dog Grooming">
    </div>
    <div>
      <h2>DOG GROOMING</h2>
      <h3>We Cater to all your dogs needs</h3>
      <p>We are a family owned and operated business. We take tremendous 
care to be gentle and kind with your pet while getting them completely 
groomed to the highest standards. </p>
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
  display: flex;
  justify-content:center;
  padding-left: 150px;
  padding-right: 150px;
  flex: 1;
  flex-wrap: wrap;

  div {
    width: 600px;
    height: 345px;
    display: inline-flex;
    flex-direction: column;
    margin: 15px -20px;

    img{
      width: 550px;
      margin: 0 80px;
    }
  
    h2 {
      width: 200px;
      font-size: 120px;
      font-weight: bold;
      line-height: 120px;
      color: #EAEAEA;
      position: absolute;
      opacity: .5;
      margin-left: -50px;
    }
    h3 { 
      position: relative;
      color: #4EC4D1;
      font-size: 28px;
      font-weight: 100px;
      margin: 230px 0 15px;
      padding-left: 15px;
      padding-right: 15px;
    }

    p {
      position: relative;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
