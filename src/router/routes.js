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
	{
		path: '/clientes',
		name: 'GerenciarClientesView',
		component: () => import('@/views/GerenciarClientesView.vue'),
		meta: {
			title: 'Clientes',
			requiresAuth: false,
		},
	},
	{
		path: '/cliente/:idCliente?',
		name: 'ClienteInput[ID]View',
		component: () => import('@/views/ClienteInput[ID]View.vue'),
		meta: {
			title: 'Cliente',
			requiresAuth: false,
		},
	},
];
