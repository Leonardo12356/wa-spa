<script setup>
	import CardRedirectAddProduto from '../components/gerenciamento/card/CardRedirectAddProduto.vue';
	import ListaProdutos from '../components/gerenciamento/listas/ListaProdutos.vue';
</script>

<template>
	<section>
		<card-redirect-add-produto
			class="mt-10 mb-10"
		></card-redirect-add-produto>

		<lista-produtos></lista-produtos>
	</section>
</template>

<style scoped></style>
