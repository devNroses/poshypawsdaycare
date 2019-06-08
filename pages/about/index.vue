<template>
  <div>
    <div class="bg_overlay"></div>
    <div class="content--wrapper">
      <h1>About Us</h1>
      <h3>
        We provide an experience unmatched
        by any other dog groomer in town!
      </h3>
      <p>
        We are a family owned and operated business. Our first priority is making sure you and your beloved
        animal are treated to the very best service, as if you were an extended family member. We want you
        and your pet to feel at home and comfortable, knowing you will be treated with first class service
        through your entire experience with us at Poshy Paws.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class About extends Vue {
  layout(): string {
    return 'about'
  }
}
</script>
