<script setup>
	import CardRedirectAddCliente from '../components/gerenciamento/card/CardRedirectAddCliente.vue';
	import ListaClientes from '../components/gerenciamento/listas/ListaClientes.vue';
</script>

<template>
	<section>
		<card-redirect-add-cliente
			class="mt-10 mb-10"
		></card-redirect-add-cliente>

		<lista-clientes></lista-clientes>
	</section>
</template>

<style scoped></style>
