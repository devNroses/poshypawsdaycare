<template>
  <div class="about--wrapper">
    <Header/>
    <!-- Page information will display here when template is referenced -->
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/features/Shared/Header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
