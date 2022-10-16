<template>
  <div>
    <b-navbar tag="header" class="header" fixed="top" v-b-scrollspy variant="light">
      <b-navbar-brand href="#">KUNIE</b-navbar-brand>
      <b-navbar-nav class="gnb">
        <b-nav-item href="#home"
        ><b-icon icon="house" /><span>Home</span></b-nav-item
        >
        <b-nav-item href="#about"
        ><b-icon icon="person-lines-fill" /><span>About</span></b-nav-item
        >
        <b-nav-item href="#skills"
        ><b-icon icon="list-check" /><span>Skills</span></b-nav-item
        >
        <b-nav-item href="#resume"
        ><b-icon icon="file-earmark" /><span>Resume</span></b-nav-item
        >
        <b-nav-item href="#article"
        ><b-icon icon="newspaper" /><span>Article</span></b-nav-item
        >
        <b-nav-item href="#contact"
        ><b-icon icon="envelope" /><span>Contact</span></b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto gnb">
        <b-nav-item
          href="https://blog.kunie.dev"
          target="_blank"
          ><b-icon icon="layout-text-sidebar-reverse" /><span>Blog</span></b-nav-item
        >
        <b-nav-item
          href="https://github.com/Kunie-dev/Kunie-dev.github.io"
          target="_blank"
          ><b-icon icon="github" /><span>Github</span></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <footer class="footer">
      <div class="footer-top">
        <b-container>
          <div class="footer-about text-center">
            <div class="footer-logo">Kunie</div>
            <b-nav class="justify-content-center">
              <b-nav-item href="https://blog.kunie.dev" target="_blank">
                <b-icon icon="layout-text-sidebar-reverse" variant="secondary" />
              </b-nav-item>
              <b-nav-item href="https://github.com/Kunie-dev" target="_blank">
                <b-icon icon="github" variant="secondary" />
              </b-nav-item>
              <b-nav-item
                href="https://www.linkedin.com/in/kunie/"
                target="_blank"
              >
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
.header {
  .gnb {
    .nav-item {
      span {
        font-size: 0;
      }
    }
  }
}
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
