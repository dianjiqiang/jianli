import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/mine'
  },
  {
    path: '/mine',
    name: 'mine',
    redurect: '/main/information',
    component: () => import('views/mine/mine'),
    children: [
      {
        path: 'information',
        name: 'information',
        component: () => import('views/mine/views/information')
      },
      {
        path: 'department',
        name: 'department',
        component: () => import('views/mine/views/department')
      },
      {
        path: 'education',
        name: 'education',
        component: () => import('views/mine/views/education')
      },
      {
        path: 'race',
        name: 'race',
        component: () => import('views/mine/views/race')
      },
      {
        path: 'self',
        name: 'self',
        component: () => import('views/mine/views/self')
      },
      {
        path: 'work',
        name: 'work',
        component: () => import('views/mine/views/work')
      }
    ]
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('views/skill/skill')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('views/project/project'),
    children: [
      {
        path: 'company',
        name: 'company',
        component: () => import('views/project/views/company')
      },
      {
        path: 'private',
        name: 'project-private',
        component: () => import('views/project/views/private')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(({ path }) => {
  if (path === '/mine') {
    return '/mine/information'
  }
})

export default router
