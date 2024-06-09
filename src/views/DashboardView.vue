<script setup>
	import CardTotalClientes from '../components/dashboard/cards/CardTotalClientes.vue';
	import CardTotalProdutos from '../components/dashboard/cards/CardTotalProdutos.vue';
</script>

<template>
	<v-container class="">
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
	</v-container>
</template>

<style scoped lang="css"></style>
