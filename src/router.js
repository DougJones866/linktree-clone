import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');



const routes = [
  { path: '/', component: Home, alias: '/linktree-clone' },
  { path: '/home', redirect:{ name: 'home'}},
  { path: '/about', component: About },
]


const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
