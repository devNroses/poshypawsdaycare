<template>
  <div class="header__nav">
      <div>
        <img class="header__nav-logo" src="~assets/img/poshy-paws-logo.png" alt="Logo" />
        <div class="header__nav-links">
          <nuxt-link to="/" exact>HOME</nuxt-link>
          <nuxt-link to="/about">ABOUT US</nuxt-link>
          <nuxt-link to="/contact">CONTACT US</nuxt-link>
        </div>
      </div>
        
<a 
href="tel:6233029211" 
onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
<p class="header__nav-callBtn">Call Today</p>
</a>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header{
  &__nav{
    display: flex;
    justify-content: space-between;
    padding: 35px;

    div{
      display: flex;
      flex-wrap: wrap;
    }

    &-links{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 25px auto;
      min-width: 380px;
      width: 400px;
    }

    &-callBtn{
      animation:  fadeIn ease 20s;
      animation-delay: 1s;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 6px;
      color: white;
      margin-right: 25px;
      padding: 10px 15px;
      text-align: center;
      transition: 0.5s;
      width: 150px;

      &:hover{
        background-color: #4ec4d1;
        border: 1px solid #4ec4d1;
        color: white;
      }
    }

      @media only screen and (max-width: 500px) {
        div{
          margin: 0 auto;
          text-align: right;
        }

        &-callBtn{
          display:none;
        }

        &-links{
          a{
            font-size: 18px;
            font-weight: bold;
          }
        }

        &-logo{
          width: 250px;
          margin: 0 auto 25px;
        }
      }
  }
}
</style>