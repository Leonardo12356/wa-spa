export const routes = [

	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/LoginView.vue'),
		meta: {
			title: 'Login',
			requiresAuth: false,
		},
	},
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
	{
		path: '/produtos',
		name: 'GerenciarProdutosView',
		component: () => import('@/views/GerenciarProdutosView.vue'),
		meta: {
			title: 'Produtos',
			requiresAuth: false,
		},
	},
	{
		path: '/produto/:idProduto?',
		name: 'ProdutoInput[ID]View',
		component: () => import('@/views/ProdutoInput[ID]View.vue'),
		meta: {
			title: 'Produto',
			requiresAuth: false,
		},
	},
	{
		path: '/usuarios',
		name: 'GerenciarUsuariosView',
		component: () => import('@/views/GerenciarUsuariosView.vue'),
		meta: {
			title: 'Usuarios',
			requiresAuth: false,
		},
	},
	{
		path: '/usuario/:idusuario?',
		name: 'UsuarioInput[ID]View',
		component: () => import('@/views/UsuarioInput[ID]View.vue'),
		meta: {
			title: 'Usuario',
			requiresAuth: false,
		},
	},
];
