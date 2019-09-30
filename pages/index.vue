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
      <div class="carousel--wrapper">
        <div class="carousel--content">
          <h1>OUR SERVICES</h1>
          <h3>Day with Poshy Paws</h3>
          <p>
            We want your furry family member to be so excited to be here. With a full array of services, which
            includes dog wash packages or items such as nail trimming/painting and dog daycare. We strive
            to provide a place to come in and instantly relax for not only you but your dog as well.
          </p>
        </div>
        <div class="carousel--slider">
          <carousel :cards="cards" />
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
          description:
            'Whether your pet wants a new cut or just a trim come on in! We start with a full body massage, richly lathered shampoo, rain water rinse, and to finish with a deep conditioning treatment will have you dog fully relaxed, clean and happy!',
          imgName: 'Grooming_dog.png',
          title: 'Grooming'
        },
        {
          description: 'Half Day Care: 4 hours of cage free play time from the time of drop off. Come in to take a tour. Full Day Care:8 hours of cage free play time from the time of drop off. Come in to take a tour.',
          imgName: 'Daycare_dog.jpg',
          title: 'Dog Daycare'
        },
        {
          description: `24 hour care by staff. Includes bedroom with queen size bed for stay. 3 walks a day depending on weather conditions. Price are $35 a night for first dog and any additional family dogs $17.50 per night. Must call and make a reservation.`,
          imgName: 'Boarding_dog.jpg',
          title: 'Boarding'
        },
        {
          description: `Our skilled and gentle groomers give sanitary trims, face trims, excess hair or pads of feet trimmed and hair around the paws trimmed.`,
          imgName: 'HairTrim_dog.jpg',
          title: 'Dog Grooming'
        },
         {
          description: `We all want our pets to look good, but sometimes they need an extra pizzazz and you don’t know where to look. Get your pets nails trimmed, buffered and painted any color!`,
          imgName: 'NailTrim_dog.png',
          title: 'Nail Services'
        },
         {
          description: `Is your furry friend scooting or showing discomfort? If so, make sure to add this feature to your package! Our skilled and gentle groomer will take care them.`,
          imgName: 'AnalExpression_dog.png',
          title: 'Anal Expression'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.carousel {
  &--wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &--content {
    width: 900px;
    padding: 15px;

    h1 {
      color: #e0e0e0;
      font-size: 160px;
      font-weight: bold;
      line-height: 0.95;
      margin-top: 0px;
      margin-bottom: -40px;
      z-index: -1;
      opacity: 0.75;
    }

    h3 {
      color: #4ec4d1;
      font-size: 36px;
      margin-bottom: 10px;
      margin-left: 50px;
    }

    p {
      width: 70%;
      line-height: 1.5;
      margin-left: 50px;
    }
  }

  &--slider {
    flex: 1;
    padding: 15px;
    height: auto;
  }
}
</style>
