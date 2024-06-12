<script setup>
	import ButtonTheme from '@/components/buttons/ButtonTheme.vue';
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const menu = ref([
		{ nomeRota: 'DashboardView', titulo: 'Dashboard' },
		{ nomeRota: 'GerenciarProdutosView', titulo: 'Produtos' },
		{ nomeRota: 'GerenciarClientesView', titulo: 'Clientes' },
	]);

	const autoRedirecionarRota = (itemMenu) => {
		router.push({ name: itemMenu.nomeRota });
	};
</script>

<template>
	<v-toolbar class="border-b-lg" color="deep-purple-accent-2">
		<v-toolbar-title>LOGO</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn
				v-for="item in menu"
				:key="item.nomeRota"
				flat
				@click="autoRedirecionarRota(item)"
			>
				{{ item.titulo }}
			</v-btn>
		</v-toolbar-items>

		<!-- MOBILE MENU -->
		<v-menu>
			<template v-slot:activator="{ props }">
				<v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
			</template>

			<v-list>
				<div class="d-flex justify-center mb-2">
					<button-theme></button-theme>
				</div>

				<v-divider :thickness="3"></v-divider>

				<div v-for="item in menu" :key="item.icon" class="item-mobile">
					<v-list-item>
						<v-list-item-title
							@click="autoRedirecionarRota(item)"
							>{{ item.titulo }}</v-list-item-title
						>
					</v-list-item>
				</div>
			</v-list>
		</v-menu>
	</v-toolbar>
</template>

<style scoped>
	.item-mobile:hover {
		cursor: pointer;
		background-color: #bdbdbd;
	}
</style>
