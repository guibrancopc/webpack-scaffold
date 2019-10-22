import Vue from 'vue';
import Router from 'vue-router';
import Sample from './pages/sample/sample.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sample',
      component: Sample,
    },
    {
      path: '/about',
      name: 'about',
      /* Lazy loading mode */
      component: () => import(/* webpackChunkName: "about" */ './pages/about/about.vue'),
    },
  ],
});
