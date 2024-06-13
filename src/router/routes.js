export const routes = [

	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/LoginView.vue'),
		meta: {
			title: 'Login',
			requiresAuth: false,
			showNavbar: false,
		},
	},
	{
		path: '/',
		name: 'DashboardView',
		component: () => import('@/views/DashboardView.vue'),
		meta: {
			title: 'Dashboard',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/clientes',
		name: 'GerenciarClientesView',
		component: () => import('@/views/GerenciarClientesView.vue'),
		meta: {
			title: 'Clientes',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/cliente/:idCliente?',
		name: 'ClienteInput[ID]View',
		component: () => import('@/views/ClienteInput[ID]View.vue'),
		meta: {
			title: 'Cliente',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/produtos',
		name: 'GerenciarProdutosView',
		component: () => import('@/views/GerenciarProdutosView.vue'),
		meta: {
			title: 'Produtos',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/produto/:idProduto?',
		name: 'ProdutoInput[ID]View',
		component: () => import('@/views/ProdutoInput[ID]View.vue'),
		meta: {
			title: 'Produto',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/usuarios',
		name: 'GerenciarUsuariosView',
		component: () => import('@/views/GerenciarUsuariosView.vue'),
		meta: {
			title: 'Usuarios',
			requiresAuth: true,
			showNavbar: true,
		},
	},
	{
		path: '/usuario/:idusuario?',
		name: 'UsuarioInput[ID]View',
		component: () => import('@/views/UsuarioInput[ID]View.vue'),
		meta: {
			title: 'Usuario',
			requiresAuth: true,
			showNavbar: true,
		},
	},
];


  
