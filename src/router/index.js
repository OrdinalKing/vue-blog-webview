// 生产环境注释下行代码
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'


//路由懒加载
// const Home = resolve=>{require(['@/components/home/index.vue'], resolve)};
const Home = resolve => {
    store.dispatch('setShowLoading');
    require(['@/components/home/index.vue'], component => {
        store.dispatch('setHideLoading');
        resolve(component)
    })
};
// const About = resolve=>{require(['@/components/about/index.vue'], resolve)};
const About = resolve => {
    store.dispatch('setShowLoading');
    require(['@/components/about/index.vue'], component => {
        store.dispatch('setHideLoading');
        resolve(component)
    })
};
// const Article = resolve=>{require(['@/components/article/index.vue'], resolve)};
const Article = resolve => {
    store.dispatch('setShowLoading');
    require(['@/components/article/index.vue'], component => {
        store.dispatch('setHideLoading');
        resolve(component)
    })
};
// const ArticleDetail = resolve=>{require(['@/components/article/detail.vue'], resolve)};
const ArticleDetail = resolve => {
    store.dispatch('setShowLoading');
    require(['@/components/article/detail.vue'], component => {
        store.dispatch('setHideLoading');
        resolve(component)
    })
};

// const Search = resolve=>{require(['@/components/search/index.vue'], resolve)};
const Search = resolve => {
    store.dispatch('setShowLoading');
    require(['@/components/search/index.vue'], component => {
        store.dispatch('setHideLoading');
        resolve(component)
    })
};



Vue.use(VueRouter)

var routerMap = {
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'Home',
        meta: {
            title: '首页'
        },
        component: Home
    }, {
        path: '/about',
        name: 'About',
        meta: {
            title: '关于'
        },
        component: About
    }, {
        path: '/article',
        name: 'Article',
        meta: {
            title: '文章'
        },
        component: Article
    }, {
        path: '/article/detail/:id',
        name: 'ArticleDetail',
        meta: {
            title: '文章详情'
        },
        component: ArticleDetail
    }, {
        path: '*',
        redirect: '/'
    }],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
}
export default new VueRouter(routerMap);
