<script setup>
	import { computed, onMounted } from 'vue';
	import { useProdutoStore } from '../../../store/produtoStore';
	import BaseCardItemQuantidade from './BaseCardItemQuantidade.vue';
	import { useRouter } from 'vue-router';
	import { useGetTotalProdutosAPI } from '../../../composables/core/api/produto/useGetTotalProdutosAPI';

	const router = useRouter();

	const produtoStore = useProdutoStore();

	const totalProdutos = computed(
		() => produtoStore.getProdutosQuantidadeTotal,
	);

	const { fetchTotalProdutos } = useGetTotalProdutosAPI();

	const redirecionarGerenciarProdutos = () => {
		router.push({ name: 'GerenciarProdutosView' });
	};

	onMounted(async () => {
		await fetchTotalProdutos();
	});
</script>

<template>
	<base-card-item-quantidade
		icon-card="mdi-tag-multiple"
		titulo="Produtos"
		:quantidade-item="totalProdutos"
		@on-arrow-redirect="redirecionarGerenciarProdutos"
	></base-card-item-quantidade>
</template>

<style scoped></style>
