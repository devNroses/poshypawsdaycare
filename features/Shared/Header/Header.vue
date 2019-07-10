<template>
  <div class="header--wrapper">
    <nav class="header--nav">
      <div>
        <img class="header--logo" src="~assets/img/poshy-paws-logo.png" alt="Logo" />
      </div>
      <div class="header--links">
        <nuxt-link to="/" exact>HOME</nuxt-link>
        <nuxt-link to="/about">ABOUT US</nuxt-link>
        <nuxt-link to="/contact">CONTACT US</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class Header extends Vue {}
</script>
