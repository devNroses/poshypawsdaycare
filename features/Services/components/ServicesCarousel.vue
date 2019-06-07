<template>
  <div class="servicess--wrapper">
    <div class="servicess--carousel">
      <carousel>
        <slide>
          <img
            src="../../../assets/img/servicess/Grooming_dog.png"
            alt="Dog Shampoo and Condtioning"
          >
        </slide>
        <slide>
          <img src="../../../assets/img/servicess/Boarding_dog.jpg" alt="Boarding Services">
        </slide>
        <slide>
          <img src="../../../assets/img/servicess/HairTrim_dog.jpg" alt="Dog Grooming Hair Trim">
        </slide>
        <slide>
          <img src="../../../assets/img/servicess/Daycare_dog.jpg" alt="All Day Daycare">
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
  margin: 20px auto;

  &:hover {
    cursor: grab;
  }
}

.placeHolder {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.services--button {
  text-align: center;
  margin: 20px auto;
  button {
    width: 250px;
    padding: 5px;
    border-radius: 12px;
    outline: none;
    color: white;
    background: #4ec4d1;
    font-size: 16px;
  }
}
</style>
