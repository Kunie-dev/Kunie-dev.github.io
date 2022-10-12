<template>
  <main>
    <section
      id="home"
      class="home-banner"
      :style="{ backgroundImage: `url(${homeBannerImgSrc})` }"
    >
      <b-container class="home">
        <b-row align-content="center" class="full-screen">
          <b-col lg="9">
            <div class="ht-box">
              <div class="ht-text">
                <p>Hello, my name is</p>
                <h1>남재근</h1>
                <Typed class="typed" :strings="['FE Developer', 'BE Developer', 'DevOps']" />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="about" class="section"></section>
    <section id="resume" class="section"></section>
    <section id="skills" class="section"></section>
    <section id="portfolio" class="section"></section>
    <section id="blog" class="section"></section>
    <section id="contact" class="section"></section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Typed from '~/components/Typed.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Typed,
  },
  computed: {
    homeBannerImgSrc() {
      return `${process.env.cdn}/images/inner_room_00.jpg`
    },
  },
})
</script>

<style scoped lang="scss">
.home-banner {
  height: 100vh;
  background-position: 80% center;
  background-repeat: no-repeat;
  background-size: cover;

  > :before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .ht-box {
    margin-top: 50px;
    padding-left: 35px;
    border-left: 5px solid #ffffff;

    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    h1 {
      font-weight: 600;
      font-size: 70px;
    }

    .typed {
      font-weight: 500;
      font-size: 25px;
    }
  }
}

.full-screen {
  min-height: 100vh;
}

.section {
  height: 500px;
  padding: 100px 0;
}
.section:nth-child(2n + 1) {
  background-color: #f5f8fd;
}
</style>
