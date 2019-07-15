import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import vueMoment from 'vue-moment';
import Paginate from 'vuejs-paginate';


import router from '@/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from '@/App.vue';

Vue.component('paginate', Paginate);
Vue.config.productionTip = false;
Vue.use(vueMoment);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');
