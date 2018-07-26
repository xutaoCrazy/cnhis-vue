import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/common/main'
import leftNav from '@/components/aside/left-nav'
import setion from '@/components/contain/setion'
import demo2 from '@/components/contain/demo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: {
        default: main,
        left: leftNav
      },
      children: [
        {
          path: '/leftnav',
          name: 'leftNav',
          components: {
            left: leftNav,
            main: setion
          },
          children: [
            {
              path: '/contain/setion',
              name: 'setion',
              components: {
                main: setion
              }
            },
            {
              path: '/demo2',
              name: 'demo2',
              components: {
                main: demo2
              }
            }
          ]
        }
      ]
    }
  ]
})
