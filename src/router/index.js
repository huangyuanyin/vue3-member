import Vue from 'vue';
import VueRouter from 'vue-router';
import BinUI from 'bin-ui';

const Home = () => import('../pages/data/home/Home');
const Home3 = () => import('../pages/data/home/Home3');
// const Home2 = () => import('../pages/data/home/Home2')
// const Overview2 = () => import('../pages/data/overview/Overview2')
const Overview = () => import('../pages/data/overview/Overview');
const Summary = () => import('../pages/data/summary/Summary');
const SummaryMap = () => import('../pages/data/summary/SummaryCopy');
const Public = () => import('../pages/data/public/Public');
const Union = () => import('../pages/data/union/Union');
const Login = () => import('../views/Login/login');
const Home4 = () => import('../pages/data/home/Home4');
// const Map = () => import('../pages/data/map/Map')

Vue.use(BinUI);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/home3',
      component: Home3,
    },
    {
      path: '/overview',
      component: Overview,
    },
    // {
    //   path: '/overview2',
    //   component: Overview2
    // },
    {
      path: '/summary',
      component: Summary,
    },
    {
      path: '/public',
      component: Public,
    },
    {
      path: '/union',
      component: Union,
    },
    {
      path: '/map',
      component: SummaryMap,
    },
    {
      path: '/',
      redirect: '/home3',
    },
    {
      path: '/home4',
      component: Home4,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

export default router;
