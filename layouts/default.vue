<template>
  <div>
    <b-navbar tag="header" fixed="top" v-b-scrollspy>
      <b-navbar-brand href="#">KUNIE</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#home">Home</b-nav-item>
        <b-nav-item href="#about">About</b-nav-item>
        <b-nav-item href="#skills">Skills</b-nav-item>
        <b-nav-item href="#portfolio">Portfolio</b-nav-item>
        <b-nav-item href="#blog">Blog</b-nav-item>
        <b-nav-item href="#contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <footer class="footer">
      <div class="footer-top">
        <b-container>
          <div class="footer-about text-center">
            <div class="footer-logo">Kunie</div>
            <b-nav class="justify-content-center">
              <b-nav-item href="https://kunie.dev" target="_blank">
                <b-icon icon="house-door-fill" variant="secondary" />
              </b-nav-item>
              <b-nav-item href="https://blog.kunie.dev" target="_blank">
                <b-icon icon="files" variant="secondary" />
              </b-nav-item>
              <b-nav-item href="https://github.com/Kunie-dev" target="_blank">
                <b-icon icon="github" variant="secondary" />
              </b-nav-item>
              <b-nav-item href="https://www.linkedin.com/in/kunie/" target="_blank">
                <b-icon icon="linkedin" variant="secondary" />
              </b-nav-item>
            </b-nav>
          </div>
        </b-container>
      </div>
      <div class="footer-bottom">
        <b-container class="text-center">
          &copy; 2022 copyright all right reserved
        </b-container>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #0c0c17;

  .footer-top {
    padding: 60px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    .footer-logo {
      color: #ffffff;
      padding-bottom: 25px;
      font-size: 43px;
      font-weight: 900;
      line-height: 43px;
    }

    .nav a {
      color: #999999;
    }
  }

  .footer-bottom {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #999999;
  }
}
</style>
