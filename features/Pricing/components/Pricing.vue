<template>
  <div class="pricing--wrapper">
    <div class="pricing--card" @click="flip" :class="{rotate3d: flipCard}">
      <div class="card--front card--base">
        <h1 class="pricing--price">$22</h1>
        <p class="pricing--header">Bath & Brush</p>
        <p class="pricing--description">Base price for small dogs (1-25lbs)</p>

        <button class="button">View more prices</button>
      </div>

      <div class="card--back card--base" :class="{zUp: flipCard}">
        <div class="pricing--details">
          <h3>Includes:</h3>
          <ul>
            <li>
              <span>Small dog (1-25lbs) -</span>
              <span>$22</span>
            </li>
            <li>
              <span>Medium dog (25-50lbs) -</span>
              <span>$33</span>
            </li>
            <li>
              <span>Large dog (51-100lbs) -</span>
              <span>$65</span>
            </li>
            <li>
              <span>Extra large dog (101lbs +)</span>
              <span>Ask for a quote</span>
            </li>
          </ul>
        </div>
        <button class="button" @click="flip">Go Back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class Pricing extends Vue {
  public flipCard: boolean = false

  public flip() {
    this.flipCard = !this.flipCard
  }
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
  }

  &--base {
    width: 20rem;
    height: 30rem;
    margin: 0 auto;
    font-family: 'Lucida Grande', sans-serif;
    background: #3498db;
    border-radius: 8px;
    border-bottom: 3px solid #2980b9;
    display: block;

    position: absolute;

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}

.rotate3d {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>
