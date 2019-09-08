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
              <br />
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
