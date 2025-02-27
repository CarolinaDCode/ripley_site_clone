import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "./constants";

Vue.use(VueRouter);

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/'

    },
    {
        path: '/',
        name: WebPages.HOME,
        components:{
            default: () => import("@/view/homeView.vue"),
            //toolbar: () => import("@/components/appBar.vue")
        }

    },
    {
        path: '/category/:nompro',
        name: WebPages.PRODUCTS,
        components: {
            default: () => import("./view/ProductList.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }
    },
    {
        path: '/search/:nompro',
        name: WebPages.PRODUCTVIEW,
        components: {
            default: () => import("./view/SearchProduct.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }
    },
    {
        path: '/productos/:producto',
        name: WebPages.PRODUCTDETAIL,
        components: {
            default: () => import("./view/ProductDetail.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }
    },
    {
        path: '/users/new',
        name: WebPages.USER,
        components: {
            default: () => import("./view/userRegister.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }
    }
];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history',
} as any);

export default router;