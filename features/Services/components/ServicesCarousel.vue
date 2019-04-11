<template>
  <div class="servicess--wrapper">
    <div class="servicess--carousel">
      <carousel :autoplay="true">
        <slide>
          <div class="placeHolder">
            <img
              src="../../../assets/img/servicess/Grooming_dog.png"
              alt="Dog Shampoo and Condtioning"
            >
          </div>
          <div class="placeHolder--title"></div>
        </slide>
        <slide>
          <div class="placeHolder">
            <img src="../../../assets/img/servicess/Boarding_dog.jpg" alt="Boarding Services">
          </div>
        </slide>
        <slide>
          <div class="placeHolder">
            <img src="../../../assets/img/servicess/HairTrim_dog.jpg" alt="Dog Grooming Hair Trim">
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.servicess--wrapper {
  width: 90%;
  margin: 0 auto;
}

.placeHolder {
  width: 100%;
  height: auto;
}
</style>
