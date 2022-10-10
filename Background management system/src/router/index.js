import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes=[
    {
        path:'/hoMe',
        name:'MaIn',
        component:()=>import('../views/MaIn.vue'),
        children:[
            {
                path:'/hoMe',
                name:'hoMe',
                component:()=>import('../views/home/index.vue'),
            },  
            {
                path:'/MAll',
                name:'MAll',
                component:()=>import('../views/mall/index.vue'),
            },  
            {
                path:'/uSer',
                name:'uSer',
                component:()=>import('../views/use/index.vue'),
            },
            {
                path:'/PAge1',
                name:'PAge1',
                component:()=>import('../views/other/page1.vue'),
            },  
            {
                path:'/PAge2',
                name:'PAge2',
                component:()=>import('../views/other/page2.vue'),
            },  
        ]
    },
    {
        path:'/login',
        name:'loGin',
        component:()=>import('../views/login/index.vue'),
    },  
]
const router=new VueRouter({
    mode:'history',
    routes
})
export default router