<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { Bar } from 'vue-chartjs';
	import { useGetProdutosMaiorEstoqueAPI } from '../../../composables/core/api/produto/useGetProdutosMaiorEstoqueAPI';
	import { useProdutoStore } from '../../../store/produtoStore';

	const produtoStore = useProdutoStore();

	const options = ref({
		responsive: true,
		maintainAspectRatio: false,
		indexAxis: 'x',
		scales: {
			x: {
				display: false, // Hide the standard labels
			},
		},
		plugins: {
			datalabels: {
				anchor: 'end',
				align: 'end',
			},
		},
	});

	const bar_indigo_color = ref('#7986CB');

	const produtosEstoque = computed(
		() => produtoStore.getProdutosMaiorEstoque,
	);

	const labelsProdutosEstoque = computed(() => {
		if (produtosEstoque.value) {
			let arrValores = produtosEstoque.value.map((produto, index) => {
				return produto.nome;
			});

			return arrValores;
		}

		return [];
	});

	const valoresProdutosEstoque = computed(() => {
		if (produtosEstoque.value) {
			let arrValores = produtosEstoque.value.map((produto, index) => {
				return produto.quantidadeEstoque;
			});

			return arrValores;
		}

		return [];
	});

	const data = computed(() => {
		return {
			labels: labelsProdutosEstoque.value,
			datasets: [
				{
					label: 'Estoque de produtos',
					backgroundColor: bar_indigo_color.value,
					data: valoresProdutosEstoque.value,
				},
			],
		};
	});

	const { fetchProdutosMaiorEstoque } = useGetProdutosMaiorEstoqueAPI();

	onMounted(async () => {
		await fetchProdutosMaiorEstoque();
	});
</script>

<template>
	<v-container class="chart-container">
		<Bar :data="data" :options="options" :plugins="ChartDataLabels" />
	</v-container>
</template>

<style scoped>
	.chart-container {
		flex-grow: 1;
		min-height: 250px;
	}
</style>
