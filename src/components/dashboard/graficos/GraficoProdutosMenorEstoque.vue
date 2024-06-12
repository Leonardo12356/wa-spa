<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { Bar } from 'vue-chartjs';
	import { useGetProdutosMenorEstoqueAPI } from '../../../composables/core/api/produto/useGetProdutosMenorEstoqueAPI';
	import { useProdutoStore } from '../../../store/produtoStore';

	const produtoStore = useProdutoStore();

	const options = ref({
		responsive: true,
		maintainAspectRatio: false,
	});

	const bar_red_lighten_color = ref('#E57373');

	const produtosMenorEstoque = computed(
		() => produtoStore.getProdutosMenorEstoque,
	);

	const labelsProdutosMenorEstoque = computed(() => {
		if (produtosMenorEstoque.value) {
			let arrValores = produtosMenorEstoque.value.map(
				(produto, index) => {
					return produto.nome;
				},
			);

			return arrValores;
		}

		return [];
	});

	const valoresProdutosMaiorEstoque = computed(() => {
		if (produtosMenorEstoque.value) {
			let arrValores = produtosMenorEstoque.value.map(
				(produto, index) => {
					return produto.quantidadeEstoque;
				},
			);

			return arrValores;
		}

		return [];
	});

	const data = computed(() => {
		return {
			labels: labelsProdutosMenorEstoque.value,
			datasets: [
				{
					label: 'Estoque de produtos',
					backgroundColor: bar_red_lighten_color.value,
					data: valoresProdutosMaiorEstoque.value,
				},
			],
		};
	});

	const { fetchProdutosMenorEstoque } = useGetProdutosMenorEstoqueAPI();

	onMounted(async () => {
		await fetchProdutosMenorEstoque();
	});
</script>

<template>
	<v-container class="chart-container">
		<Bar :data="data" :options="options" />
	</v-container>
</template>

<style scoped>
	.chart-container {
		flex-grow: 1;
		min-height: 250px;
	}
</style>
