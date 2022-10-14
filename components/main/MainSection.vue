<template>
  <section class="section">
    <b-container>
      <div v-if="hasHeaderText || hasHeaderDesc" class="section-title">
        <h2 v-if="hasHeaderText"><slot name="header-text" /></h2>
        <p v-if="hasHeaderDesc"><slot name="header-desc"/></p>
      </div>
      <slot />
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainSection",
  computed: {
    hasHeaderText() {
      return !!this.$slots["header-text"]?.length;
    },
    hasHeaderDesc() {
      return !!this.$slots["header-desc"]?.length;
    },
  }
});
</script>

<style scoped lang="scss">
section {
  min-height: 500px;
  padding: 100px 0;

  .section-title {
    margin-bottom: 20px;
  }
}

section:nth-child(2n + 1) {
  background-color: #f5f8fd;
}
</style>
