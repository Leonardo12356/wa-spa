<script setup>
	import CardTotalClientes from '../components/dashboard/cards/CardTotalClientes.vue';
	import CardTotalProdutos from '../components/dashboard/cards/CardTotalProdutos.vue';
	import GraficoProdutosEstoque from '../components/dashboard/graficos/GraficoProdutosEstoque.vue';
</script>

<template>
	<v-container class="">
		<h1 class="text-h4 font-weight-black mt-5 mb-10">Dashboard:</h1>

		<!-- cards -->
		<v-row>
			<v-col cols="6" sm="6">
				<v-sheet class="">
					<card-total-clientes></card-total-clientes>
				</v-sheet>
			</v-col>

			<v-col cols="6" sm="6">
				<v-sheet class="">
					<card-total-produtos></card-total-produtos>
				</v-sheet>
			</v-col>
		</v-row>
		<!-- final cards -->

		<!-- graficos -->
		<v-row>
			<v-col cols="12">
				<grafico-produtos-estoque></grafico-produtos-estoque>
			</v-col>
		</v-row>
		<!-- final graficos -->
	</v-container>
</template>

<style scoped lang="css"></style>
