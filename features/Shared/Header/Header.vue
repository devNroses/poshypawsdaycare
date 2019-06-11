<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/">
            <img class="logo" src="~assets/img/poshy-paws-logo.png" alt="Logo">
          </nuxt-link>
          <nuxt-link to="/" class="navbar-item">HOME</nuxt-link>
          <nuxt-link to="/about" class="navbar-item">ABOUT US</nuxt-link>
          <nuxt-link to="/services" class="navbar-item">SERVICES</nuxt-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span/>
            <span/>
            <span/>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <nuxt-link to="/contact" class="button is-info is-inverted">
                <span>Contact Us</span>
              </nuxt-link>
            </span>
          </div>
        </div>
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
