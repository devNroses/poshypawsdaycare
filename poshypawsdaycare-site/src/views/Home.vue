<template>
  <div class="home">
    <app-home></app-home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeContainer from "@/modules/home/index.vue";

@Component({
  components: {
    appHome: HomeContainer
  }
})
export default class Home extends Vue {}
</script>
