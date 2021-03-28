import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import CatalogePage from '../pages/CatalogePage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import ItemPage from '../pages/ItemPage.vue'

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
        },
        {
            path: '/cataloge/categoryName',
            name: 'categotyName',
            component: CategoryPage
        },
        {
            path: '/cataloge/categoryName/itemName',
            name: 'itemName',
            component: ItemPage
        }
    ]
})