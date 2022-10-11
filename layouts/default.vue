<template>
  <div>
    <b-navbar tag="header" fixed="top" v-b-scrollspy>
      <b-navbar-brand href="#">Kunie</b-navbar-brand>
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
  </div>
</template>
