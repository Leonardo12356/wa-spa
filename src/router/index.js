import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { obterTokenNaStorage } from '../utils/localStorage.js';


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

router.beforeEach((to, from, next) => {
	const token = obterTokenNaStorage('token');
  
	if (to.name === 'Login') {
	  if (token) {
		next({ name: 'DashboardView' });
	  } else {
		next();
	  }
	} else if (to.matched.some(route => route.meta.requiresAuth)) {
	  if (!token) {
		next({
		  path: '/login',
		  params: { nextUrl: to.fullPath },
		});
	  } else {
		next();
	  }
	} else {
	  next();
	}
  });

export default router;
