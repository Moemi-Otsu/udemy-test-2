import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from 'vue-awesome-swiper/dist/vue-awesome-swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter.js'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false;
// Vue.use(VueAwesomeSwiper);
Vue.use(getAwesomeSwiper(Swiper));

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');