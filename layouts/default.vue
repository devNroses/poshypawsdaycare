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

    <div class="footer">
      <div></div>
      <div class="footer--content">
        <h3>Great spa day for your dog</h3>
        <p>
          If you like to schedule grooming,
          boarding, or have any other questions,
          we’re here to help.
        </p>
        <button class="button--contact">Contact</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  height: 600px;
  color: white;
  margin: 200px auto 50px;
  display: flex;
  justify-content: flex-start;
  padding: 0;

  div {
    background: #4ec4d1;
    width: 50%;
    height: auto;
    flex-grow: 1;
    flex-wrap: wrap;

    &:first-child {
      width: 45%;
      background-image: url('../assets/img/footer_dog.jpg');
      background-position: left center;
    }
  }

  &--content {
    padding: 50px;
    h3 {
      margin-top: 18%;
      font-size: 20px;
    }

    p {
      font-size: 32px;
      font-weight: bold;
      margin: 20px auto;
    }
  }
}
.button {
  &--contact {
    width: 150px;
    height: auto;
    padding: 10px;
    font-size: 18px;
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: #4ec4d1;
    }
  }
}
</style>
