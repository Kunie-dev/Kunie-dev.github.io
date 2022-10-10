<template>
  <vue-typed-js :strings="strings" :loop="true" :typeSpeed="100" :backSpeed="50">
    <span class="typing"></span>
  </vue-typed-js>
</template>

<script>
import { VueTypedJs } from "vue-typed-js";

export default {
  name: "Typed",
  components: {
    VueTypedJs
  },
  props: {
    strings: {
      type: Array,
      default: () => []
    }
  }
}
</script>
