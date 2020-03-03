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
              <span>{{ list.largeDog }}</span>
              <span v-if="list.largeDogPrice !== null">- ${{ list.largeDogPrice }} +</span>
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
      price: 25,
      name: 'Bath & Brush',
      description: 'Base price for small dogs (0 - 25lbs)',
      smallDog: 'Small dog (0 - 25 lbs)',
      smallDogPrice: 25,
      mediumDog: 'Medium dog (26 - 49lbs)',
      mediumDogPrice: 36,
      largeDog: 'Large dog (50+lbs)',
      largeDogPrice: 65,
      favorited: false
    },
    {
      price: 36,
      name: 'Full Groom',
      description: 'Base price for small dogs (0 - 25lbs)',
      smallDog: 'Small dog (0 - 25lbs)',
      smallDogPrice: 36,
      mediumDog: 'Medium dog (26 - 49lbs)',
      mediumDogPrice: 48,
      largeDog: 'Large dog (50+ lbs)',
      largeDogPrice: 75,
      extraLargeDog: 'Extra large dog',
      extraLargeDogPrice: 'Ask for a quote',
      favorited: false
    },
    {
      price: 40,
      name: 'Boarding 24 hour care',
      description: 'Includes: per night. Current price is for first dog',
      smallDog: 'First dog',
      smallDogPrice: 40,
      mediumDog: 'Additional Dogs (per added dog)',
      mediumDogPrice: 20,
      largeDog: 'Check in by 4pm',
      largeDogPrice: null,
      extraLargeDog: 'Our food per night, per dog',
      extraLargeDogPrice: '$5',
      favorited: false
    }
  ]
}
</script>
