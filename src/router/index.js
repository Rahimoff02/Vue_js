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
      component: () => import('../views/profile/edit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/security',
      name: 'profile_security',
      component: () => import('../views/profile/security.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
      meta: {
        requiresAuth: false 
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register.vue'),
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
