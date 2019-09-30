<template>
  <button class="btn">
    <img class="icon" :src="require(`@/assets/svg/${arrowType}.svg`)" :alt="arrowType + ' arrow'" />
  </button>
</template>

<script>
export default {
  name: 'ArrowButton',
  props: { arrowType: String }
}
</script>

<style lang="scss" scoped>
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

  :disabled {
    opacity: 0.2;
    cursor: default;
  }
}

.icon {
  height: 90px;
  width: auto;
}

@media only screen and (max-width: 768px) {
  .btn {
    display: none;
  }
}
</style>