import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile_index',
      component: () => import('../views/profile/index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/edit',
      name: 'profile_edit',
      component: () => import('../views/profile/edit.vue')
    },
    {
      path: '/profile/security',
      name: 'profile_security',
      component: () => import('../views/profile/security.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
      meta: {
        requiresAuth: false 
      }
    },
    
  ]
})


router.beforeEach((to) => {
  
  if (to.meta.requiresAuth && !localStorage.getItem('authToken')) {
    return  {name: 'login'}
      
  } 

  if (to.meta.requiresAuth == false && localStorage.getItem('authToken')) {
    return  {name: 'profile_index'}
      
  } 


})

export default router
