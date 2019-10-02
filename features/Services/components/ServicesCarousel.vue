<template>
  <section class="card-carousel">
    <ArrowButton arrowType="left" :disabled="reachedMaxLeft" @click.native="showPrevElement" />
    <Card
      class="current-element"
      :title="currentElement.title"
      :description="currentElement.description"
      :imgName="currentElement.imgName"
    />
    <ArrowButton arrowType="right" :disabled="reachedMaxRight" @click.native="showNextElement" />
  </section>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Card from './Card.vue'
import ArrowButton from './ArrowButton.vue'

export default {
  name: 'Carousel',
  props: { cards: Array },
  components: { Card, ArrowButton },

  data() {
    return {
      currentElementIndex: 0
    }
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex]
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1
    }
  },

  methods: {
    showNextElement() {
      this.currentElementIndex++
    },
    showPrevElement() {
      this.currentElementIndex--
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.card-carousel {
  display: flex;
  align-items: center;
  margin: 0 20px 30px;
  width: 280px;
}

.btn {
  height: 90px;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
}

.icon {
  height: 90px;
  width: auto;
}
</style>
