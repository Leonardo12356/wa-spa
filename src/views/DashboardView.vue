<script setup>
	import CardTotalClientes from '../components/dashboard/cards/CardTotalClientes.vue';
	import CardTotalProdutos from '../components/dashboard/cards/CardTotalProdutos.vue';
	import GraficoProdutosEstoque from '../components/dashboard/graficos/GraficoProdutosEstoque.vue';
	import GraficoProdutosMenorEstoque from '../components/dashboard/graficos/GraficoProdutosMenorEstoque.vue';
</script>

<template>
	<v-container class="">
		<h1 class="text-h4 font-weight-black mt-5 mb-10">Dashboard:</h1>

		<!-- cards -->
		<v-row>
			<v-col cols="12" sm="6">
				<card-total-clientes></card-total-clientes>
			</v-col>

			<v-col cols="12" sm="6">
				<card-total-produtos></card-total-produtos>
			</v-col>
		</v-row>
		<!-- final cards -->

		<!-- graficos -->
		<v-row class="mt-10">
			<v-col cols="12">
				<h5
					class="text-h5 text-center font-weight-medium text-uppercase"
				>
					Produtos com maiores estoques
				</h5>

				<grafico-produtos-estoque></grafico-produtos-estoque>
			</v-col>
		</v-row>

		<v-row class="mt-10">
			<v-col cols="12">
				<h5
					class="text-h5 text-center font-weight-medium text-uppercase"
				>
					Produtos com estoques negativos ou zerados
				</h5>

				<grafico-produtos-menor-estoque></grafico-produtos-menor-estoque>
			</v-col>
		</v-row>
		<!-- final graficos -->
	</v-container>
</template>

<style scoped lang="css"></style>
