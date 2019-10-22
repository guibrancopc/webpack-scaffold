import Vue from 'vue';
import Router from 'vue-router';
import Sample from './pages/sample/sample.vue';
import About from './pages/about/about.vue';

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
      component: About,
      // component: () => import(/* webpackChunkName: "meetingDashboard" */ './pages/meetingDashboard/meetingDashboard.vue'),
    },
  ],
});
