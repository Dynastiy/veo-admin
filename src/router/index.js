import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../views/layouts/dashboardLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: DashboardLayout,
        children: [{
                path: '/',
                name: 'Dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/dashboardView.vue')
            },
            {
                path: '/plans',
                name: 'manage-plans',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/plans/indexView.vue')
            },
            {
                path: '/invoices',
                name: 'Invoices',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/invoices/indexView.vue')
            },

            {
                path: '/payments',
                name: 'payments',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/payments/indexView.vue')
            },
            {
                path: '/hospitals',
                name: 'hospitals',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/hospitals/indexView.vue')
            },
            {
                path: '/hospitals/:id',
                name: 'hospital-details',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/hospitals/_id.vue')
            },
            {
                path: '/labs',
                name: 'labs',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/labs/indexView.vue')
            },
            {
                path: '/services',
                name: 'services',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/services/indexView.vue')
            },
            {
                path: '/service-prices',
                name: 'service-prices',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/prices/indexPage.vue')
            },
            {
                path: '/drugs',
                name: 'drugs',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/drugs/indexView.vue')
            },
            {
                path: '/enrollees',
                name: 'Enrolees',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/enrollees/indexView.vue')
            },
            {
                path: '/groups',
                name: 'groups',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/groups/indexView.vue')
            },


        ]
    },
    {
        path: '/sign-in',
        name: 'Sign In',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/signIn.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router