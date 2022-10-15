import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: 'G-PFGL5LVSX5' },
    appName: 'Kunie.dev Portfolio',
  })
}
