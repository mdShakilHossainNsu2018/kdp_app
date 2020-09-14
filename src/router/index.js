import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/components/Index";
import RoyaltyCalculator from "@/components/RoyaltyCalculator";
import TitleGenerator from "@/components/TitleGenerator";
import PdfCombiner from "@/components/PdfCombiner";
import SynonymsCreator from "@/components/SynonymsCreator";
import TrademarkSearch from "@/components/QrCodeGenerator";
import WordCloud from "@/components/WordCloud";
import CategoryLists from "@/components/CategoryLists";

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
    { path: '/pdf-combiner', component: PdfCombiner, name: 'PdfCombiner', meta: {
      title: 'Self Publishing Titans - Pdf Combiner'
    } },
    { path: '/synonyms-creator', component: SynonymsCreator, name: 'SynonymsCreator', meta: {
      title: 'Self Publishing Titans - Synonyms Creator'
    } },
    { path: '/trademark-search', component: TrademarkSearch, name: 'TrademarkSearch', meta: {
      title: 'Self Publishing Titans - Trademark Search'
    } },
    { path: '/word-cloud', component: WordCloud, name: 'WordCloud', meta: {
      title: 'Self Publishing Titans - Word Cloud'
    } },
    { path: '/category-lists', component: CategoryLists, name: 'CategoryLists', meta: {
      title: 'Self Publishing Titans - Category Lists'
    } },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
