<template>
  <div class="carousel--wrapper">
    <transition-group
      name="slide"
      mode="out-in"
      enter-class="slide-in"
      leave-class="slide-out"
      enter-active-class="animated  slide-in-active"
      leave-active-class="animated slide-out-active"
    >
      <div v-for="index in slides" :key="index">
        <div v-if="index == active" class="services--service">Slide {{ index }}</div>
      </div>
    </transition-group>

    <span class="services--prev" @click="move(-1)">
      <font-awesome-icon icon="chevron-left" />
    </span>
    <span class="services--next" @click="move(1)">
      <font-awesome-icon icon="chevron-right" />
    </span>

    <ul class="services--navigation">
      <li
        v-for="(dot, index) in slides"
        :class="{active: ++index === active }"
        :key="index"
        @click="jump(index)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class ServicesCarousel extends Vue {
  slides = 5
  active = 1

  move(amount) {
    let newActive
    const newIndex = this.active + amount

    if (newIndex > this.slides) {
      newActive = 1
    }
    if (newIndex === 0) newActive = this.slides

    this.active = newActive || newIndex
  }

  jump(index) {
    this.active = index
  }
}
</script>

<style lang="scss">
.services {
  &--prev,
  &--next {
    display: flex;
    position: absolute;
    width: 50px;
    height: 50px;
    border: 2px solid #221e21;
    color: #221e21;
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 25px;
    cursor: pointer;
    line-height: 48px;
    text-align: center;
    text-indent: -2px;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      background: #221e21;
      color: #fff;
      transform: scale(1.5);
    }

    &:active {
      transform: translate(0, 3px) scale(1.5);
    }
  }

  &--prev {
    left: 0;
    .svg-inline--fa.fa-w-10 {
      margin: 0 10px;
    }
  }
  &--next {
    right: 0;
    margin-left: auto;
    margin-right: 25px;
    text-indent: 2px;

    .svg-inline--fa.fa-w-10 {
      margin: 0 15px;
    }
  }

  &--navigation {
    bottom: 20px;
    display: block;
    margin: -12px auto 0px;
    text-align: center;
    width: 100%;

    li {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: #221e21;
      opacity: 0.2;
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
      transition: opacity 0.4s ease-in-out,
        width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &.active {
        width: 22px;
        opacity: 1;
      }
    }
  }

  &--service {
    border: 2px solid hotpink;
    width: 100%;
    margin: 0 auto;
  }
}
.carousel {
  &--wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    font-weight: bold;
    height: 100%;
    justify-content: space-between;
    margin: 40px auto;
    width: 50%;

    @media (min-width: 600px) {
      font-size: 80px;
    }

    @media (min-width: 900px) {
      font-size: 140px;
    }

    .animated {
      transition: all 400ms;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    .slide-in {
      opacity: 0;
      transform: translate(-40%, -50%);
    }

    .slide-in-active {
      transition-delay: 150ms;
    }

    .slide-out {
      opacity: 1;
    }

    .slide-out-active {
      opacity: 0;
      transform: translate(-60%, -50%);
    }
  }
}

.svg-inline--fa.fa-w-10 {
  display: block;
  width: 50%;
  height: 52px;
}
</style>
