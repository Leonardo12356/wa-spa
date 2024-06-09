export const routes = [
	{
		path: '/',
		name: 'DashboardView',
		component: () => import('@/views/DashboardView.vue'),
		meta: {
			title: 'Dashboard',
			requiresAuth: false,
		},
	},
];
