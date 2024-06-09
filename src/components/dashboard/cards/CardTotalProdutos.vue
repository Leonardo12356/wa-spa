<script setup>
	import BaseCardItemQuantidade from './BaseCardItemQuantidade.vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const redirecionarGerenciarProdutos = () => {
		router.push({ name: 'DashboardView' });
	};
</script>

<template>
	<base-card-item-quantidade
		icon-card="mdi-tag-multiple"
		titulo="Produtos"
		:quantidade-item="25"
		@on-arrow-redirect="redirecionarGerenciarProdutos"
	></base-card-item-quantidade>
</template>

<style scoped></style>
