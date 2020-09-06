import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/components/Index";
import RoyaltyCalculator from "@/components/RoyaltyCalculator";
import TitleGenerator from "@/components/TitleGenerator";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index, name: 'Index', meta: {
      title: 'Self Publishing Titans - Home'
    } },
  { path: '/royalty-calculator', component: RoyaltyCalculator, name:"RoyaltyCalculator", meta: {
      title: 'Self Publishing Titans - Calculator'
    } },
  { path: '/title-generator', component: TitleGenerator, name: 'TitleGenerator', meta: {
      title: 'Self Publishing Titans - Title Generator'
    } },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
