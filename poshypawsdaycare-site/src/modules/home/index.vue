<template>
  <div>
    <app-landing></app-landing>
  </div>
</template>

<script lang="ts">
import LandingPage from "./_components/Landing.vue";

export default {
  name: "HomeModule",
  components: {
    appLanding: LandingPage
  }
};
</script>
