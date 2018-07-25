import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import articleList from '../components/articleList'
import articleDetail from '../components/articleDetail'
import tab1 from '../components/tab1'
import tab2 from '../components/tab2'
import tab3 from '../components/tab3'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'tab1',
          component: tab1
        }, {
          path: 'tab2',
          component: tab2
        }, {
          path: 'tab3',
          component: tab3
        }
      ]
    }, {
      path: '/tab1',
      name: 'tab1',
      component: tab1
    }, {
      path: '/tab2',
      name: 'tab2',
      component: tab2
    }, {
      path: '/tab3',
      name: 'tab3',
      component: tab3
    }, {
      path: '/articleList/:id',
      name: 'articleList',
      component: articleList

    }, {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      component: articleDetail
    }
  ]
})
