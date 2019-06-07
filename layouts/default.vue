<template>
  <div>
    <section class="hero landing-page is-info is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <nuxt-link to="/">
                <img class="logo" src="../assets/img/poshy-paws-logo.png" alt="Logo">
              </nuxt-link>
              <nuxt-link to="/" class="navbar-item">HOME</nuxt-link>
              <nuxt-link to="/about" class="navbar-item">ABOUT US</nuxt-link>
              <nuxt-link to="/services" class="navbar-item">SERVICES</nuxt-link>
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span/>
                <span/>
                <span/>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <nuxt-link to="/contact" class="button is-info is-inverted">
                    <span>Contact Us</span>
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

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
  </div>
</template>
