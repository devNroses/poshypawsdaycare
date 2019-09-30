<template>
  <div class="card">
    <img alt="service-card" class="card--icon" :src="require(`@/assets/img/services/${imgName}`)" />
    <div class="card--content">
      <h3 class="card--title">{{title}}</h3>
      <p class="card--description">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    description: String,
    imgName: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
/* 
    This is how to import a style sheet into a component and still taking advantage
    of SaSS styling 
    <style src="../assets/styles/Card.css" scoped>
*/

.card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 20px 60px 0 rgba(41, 67, 100, 0.21);
  width: 400px;
  height: 400px;
  padding: 15px;

  &--icon {
    pointer-events: none;
    width: 100%;
  }

  &--title {
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 0;
  }

  &--content {
    padding: 20px;
  }
}

.card-carousel {
  div {
    flex: none !important;
  }
}
</style>