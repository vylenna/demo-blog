import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue'
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
