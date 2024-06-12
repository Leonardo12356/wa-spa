<script setup>
	import BaseCardItemQuantidade from './BaseCardItemQuantidade.vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const redirecionarGerenciarClientes = () => {
		router.push({ name: 'DashboardView' });
	};
</script>

<template>
	<base-card-item-quantidade
		icon-card="mdi-account"
		titulo="Clientes Ativos"
		:quantidade-item="1000"
		@on-arrow-redirect="redirecionarGerenciarClientes"
	></base-card-item-quantidade>
</template>

<style scoped></style>
