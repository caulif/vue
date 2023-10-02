import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/UserInfoPage',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/UserInfoPage',
                name: 'UserInfoPage',
                meta: {
                    title: '用户信息',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "UserInfoPage" */ '../views/UserInfoPage.vue'),
            },
            {
                path: '/PublicKeyGenerationPage',
                name: 'PublicKeyGenerationPage',
                meta: {
                    title: '公钥生成',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/PublicKeyGenerationPage.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '数字签名',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '签名认证',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
        ],
    },
    // ...
    
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },

    // 其他路由项可以保留，但在这个示例中，只保留了四个路由项。
];

// ...


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;
