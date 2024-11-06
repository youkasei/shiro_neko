import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';

const modules = import.meta.glob('@/views/**/*.vue');
console.log(modules);
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path:'/docs',
		name:'docs',
		component:()=>import('../views/Doc/Document.vue')
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
