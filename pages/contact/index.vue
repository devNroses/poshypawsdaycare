<template>
  <div>
    <div class="bg_overlay"></div>
    <div class="content--wrapper">
      <h1>Contact Us</h1>
      <div class="contact--info">
        <h3>
          Open
          <br>Monday - Friday
          <br>6:30 am - 7:00 pm
          <br>Saturday
          <br>8 am - 5:00 pm
        </h3>
        <br>
        <h3>
          Call:
          623-302-9211
          <br>Address:
          <br>9501 W. Peoria Ave. #101
          <br>Peoria, AZ 85345
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class ContactUs extends Vue {
  layout(): string {
    return 'contactUs'
  }
}
</script>

<style lang="scss" >
.contact {
  &--info {
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    h3 {
      width: 260px;
      font-size: 24px;
    }
  }
}
</style>
