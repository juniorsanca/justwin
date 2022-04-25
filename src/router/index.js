import firebase from 'firebase/compat/app'
import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import Play from '../views/Play.vue'
import Game from '../views/Game.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import RankingView from '../views/Ranking.vue'
import ForgotPassword from '../views/ForgotPassword.vue'


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
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
       meta: {
        requiresAuth: true
      }
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
    path: '/forgot-password',
    name: 'forgot-password',
    component : ForgotPassword,
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
    component : Play,
       meta: {
        requiresAuth: true
      }
  },
    {
    path: '/game',
    name: 'Game',
    component : Game,
    },
    {
    path: '/verify-email',
    name: 'VerifyEmail',
    component : VerifyEmail,
     meta: {
        requiresAuth: true
      }
    },
    {
    path: '/home',
    name: 'home',
    component: HomeView,
     meta: {
       requiresAuth: true,
       requiresEmailVerification: true
    }
  }
]
});


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
      next ('login');
  } else if (!requiresAuth && currentUser) {

    if (currentUser.emailVerified){
      next('home')
      } else {
          next('/verify-email')
      }
    }
  else next();
});

export default router;