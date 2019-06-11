<template>
  <div>
    <section class="hero landing-page is-info is-large">
      <Header/>
      <div class="hero-body">
        <div class="container">
          <p class="title">A Haute Spa Day</p>
          <p class="subtitle">For Your Family Member</p>
          <p class="hero--description">
            Our first priority is making sure you and your beloved
            animal treated to the very best service, as if you were
            an extended family member.
          </p>
        </div>
      </div>
    </section>

    <div class="container column is-12">
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
