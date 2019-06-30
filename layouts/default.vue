<template>
  <div class="flexgrid--wrapper">
    <section class="landingPage--container">
      <Header/>

      <div class="landingPage--hero-content">
        <p class="landingPage--title">A Haute Spa Day</p>
        <p class="landingPage--subtitle">For Your Family Member</p>
        <p class="landingPage--description">
          Our first priority is making sure you and your beloved
          animal treated to the very best service, as if you were
          an extended family member.
        </p>
      </div>
    </section>

    <div>
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/features/Shared/Header/Header.vue'
import Footer from '@/features/Shared/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
