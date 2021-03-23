import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import CatalogePage from '../pages/CatalogePage.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/cataloge',
            name: 'cataloge',
            component: CatalogePage
        },
        {
            path: '/',
            name: 'main',
            component: MainPage
        }
    ]
})