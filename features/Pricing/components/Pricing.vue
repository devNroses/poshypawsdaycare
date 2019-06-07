<template>
  <div class="pricing--wrapper">
    <div
      v-for="list of packages"
      :key="list.id"
      class="pricing--card"
      :class="{rotate3d: list.favorited}"
      @click="list.favorited = !list.favorited"
    >
      <div class="card--front card--base">
        <h1 class="pricing--price">${{ list.price }}</h1>
        <p class="pricing--header">{{ list.name}}</p>
        <p class="pricing--description">{{ list.description }}</p>

        <div class="pricing--footer">View Prices</div>
      </div>

      <div class="card--back card--base" :class="{zUp: list.favorited}">
        <div class="pricing--details">
          <h3>Includes:</h3>
          <ul>
            <li>
              <span>{{ list.smallDog }} -</span>
              <span>${{ list.smallDogPrice }}</span>
            </li>
            <li>
              <span>{{ list.mediumDog }}</span>
              <span>${{ list.mediumDogPrice }}</span>
            </li>
            <li>
              <span>{{ list.largeDog }} -</span>
              <span>${{ list.largeDogPrice }}</span>
            </li>
            <li>
              <span>{{ list.extraLargeDog }}</span>
              <br>
              <span class="details--finePrint">{{ list.extraLargeDogPrice }}</span>
            </li>
          </ul>
        </div>
        <div class="pricing--footer">View Packages</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class Pricing extends Vue {
  public packages: any[] = [
    {
      price: 22,
      name: 'Bath & Brush',
      description: 'Base price for small dogs (1-25lbs)',
      smallDog: 'Small dog (1-25 lbs)',
      smallDogPrice: 22,
      mediumDog: 'Medium dog (26 - 50 lbs)',
      mediumDogPrice: 33,
      largeDog: 'Large dog (51 - 100 lbs)',
      largeDogPrice: 65,
      extraLargeDog: 'Extra large dog (101 lbs + )',
      extraLargeDogPrice: 'Ask for a quote',
      favorited: false
    },
    {
      price: 15,
      name: 'Furminator Treatment',
      description: 'Base price for small dogs (1-25lbs)',
      smallDog: 'Small dog (1-25 lbs)',
      smallDogPrice: 15,
      mediumDog: 'Medium dog (26 - 50 lbs)',
      mediumDogPrice: 20,
      largeDog: 'Large dog (51 - 100 lbs)',
      largeDogPrice: 25,
      extraLargeDog: 'Extra large dog (101 lbs + )',
      extraLargeDogPrice: 'Ask for a quote',
      favorited: false
    },
    {
      price: 33,
      name: 'Haircut',
      description:
        'Includes: Eyes & Ears cleaned, nails cut & filed, anal expressions, sanitary, shampoo, conditioner, blow out, brush out, hair cut',
      smallDog: 'Small dog (1-25 lbs)',
      smallDogPrice: 33,
      mediumDog: 'Medium dog (26 - 50 lbs)',
      mediumDogPrice: 44,
      largeDog: 'Large dog (51 - 100 lbs)',
      largeDogPrice: 75,
      extraLargeDog: 'Extra large dog (101 lbs + )',
      extraLargeDogPrice: 'Ask for a quote',
      favorited: false
    }
  ]
}
</script>

<style lang="scss">
.card {
  &--front,
  .zUp {
    z-index: 10;
  }

  &--back {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    transform: rotateY(180deg);
    top: 0;
    overflow: hidden;
    // background: #4ec4d1;
    color: white;
  }

  &--base {
    width: 20rem;
    height: 30rem;
    margin: 0 -10px;
    font-family: 'Lucida Grande', sans-serif;

    border-radius: 8px;
    background: #272727;
    color: lightgray;
    border: 1px solid lightgray;
    display: block;

    position: absolute;
    z-index: 100;

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  &--front {
    padding: 20px;
  }
}

.rotate3d {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.pricing {
  &--wrapper {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  &--details {
    font-size: 16px;
    margin-top: 40%;

    li {
      margin: 15px;
      font-size: 16px;
      font-weight: 700;
    }
  }

  &--price {
    font-size: 75px;
    color: #4ec4d1;
    margin: 40% auto 2px;
  }

  &--header {
    font-size: 28px;
  }

  &--description {
    font-size: 14px;
    margin: 12px auto;
  }

  &--footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    font-size: 20px;
    color: gray;
  }

  &--section {
  }
}

.details--finePrint {
  font-size: 14px;
}
</style>
