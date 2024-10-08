import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/UserLogin.vue';
import Register from '../components/UserRegister.vue';
import TaskManager from '../components/UserTaskManager.vue';
import Profile from '../components/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/tasks', // Redirects the home to the tasks if logged in
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskManager,
    meta: { requiresAuth: true }, // Protect the route if needed
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }, // Protect the route if needed
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add navigation guards if necessary to protect routes
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
