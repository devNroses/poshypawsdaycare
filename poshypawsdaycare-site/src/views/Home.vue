<template>
  <div class="home">
    <HomeContainer></HomeContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeContainer from "@/modules/home/index.vue";

@Component({
  components: {
    HomeContainer
  }
})
export default class Home extends Vue {}
</script>
