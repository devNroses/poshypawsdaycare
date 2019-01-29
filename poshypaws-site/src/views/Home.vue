<template>
  <div class="home">
    <app-landing></app-landing>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Landing from "@/modules/home/index.vue"; // @ is an alias to /src

@Component({
  components: {
    appLanding: Landing
  }
})
export default class Home extends Vue {}
</script>
