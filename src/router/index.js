import firebase from 'firebase/compat/app'
import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import Play from '../views/Play.vue'
import Game from '../views/Game.vue'
//import RegisterView from '../views/Register.vue'


Vue.use(Router);

const router = new Router ({
 routes : [
   {
      path: '*',
      redirect: '/login'
   },
   {
      path : '/',
      redirect: '/login'
   },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component : LoginView,
     meta: {
      requiresAuth: false
    }
  },
    {
    path: '/register',
    name: 'Register',
    component : RegisterView
  },
    {
    path: '/play',
    name: 'Play',
    component : Play
  },
    {
    path: '/game',
    name: 'Game',
    component : Game,
    },
    {
    path: '/home',
    name: 'home',
    component: HomeView,
     meta: {
      requiresAuth: true
    }
  }
]
});


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next ('login');
  else if (!requiresAuth && currentUser)next('home');
  else next();
});

/*
router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  return false
})
*/
export default router;