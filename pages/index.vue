<template>
  <div>
    <section>
      <div class="section--wrapper">
        <div class="section--mainContent">
          <img src="@/assets/img/dogGrooming.jpg" alt="Dog Grooming" />
        </div>
        <div class="section--content-right">
          <h1>DOG GROOMING</h1>
          <h3>We Cater to all your dogs needs</h3>
          <p>
            We are a family owned and operated business. We take tremendous
            care to be gentle and kind with your pet while getting them completely
            groomed to the highest standards.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="section--wrapper">
        <div class="section--content-fullwidth">
          <div class="section--content-left">
            <h1>OUR SERVICES</h1>
            <h3>Day with Poshy Paws</h3>
            <p>
              We want your furry family member to be so excited to be here. With a full array of services, which
              includes dog wash packages or items such as nail trimming/painting and dog daycare. We strive
              to provide a place to come in and instantly relax for not only you but your dog as well.
            </p>
            <carousel :cards="cards" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section--wrapper">
        <div class="section--content_fullwidth">
          <div class="section--mainContent section--content-center">
            <h1>PRICING</h1>
            <h3>We service any size dog</h3>
            <p>
              We offer monthly packages that combine some of our top services for your furry family member. If you would like
              to schedule a service please contact us and set an appointment. Any rush appointments will be
              charged extra depending on available time slots.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section--content_fullwidth">
        <pricing />
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '@/features/Services/components/ServicesCarousel.vue'
import Pricing from '@/features/Pricing/components/Pricing.vue'

export default {
  name: 'Home',
  components: { Carousel, Pricing },

  data() {
    return {
      cards: [
        {
          description: 'test',
          imgName: 'Grooming_dog.png',
          title: 'Dog Grooming'
        },
        {
          description: 'Full & Half Day',
          imgName: 'Daycare_dog.jpg',
          title: 'Dog Daycare'
        },
        {
          description: '24 hour care by staff',
          imgName: 'Boarding_dog.jpg',
          title: 'Boarding'
        },
        {
          description: 'test',
          imgName: 'HairTrim_dog.jpg',
          title: 'Dog Grooming'
        }
      ]
    }
  }
}
</script>
