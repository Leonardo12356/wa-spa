<script setup>
	import ListaUsuarios from '../components/gerenciamento/listas/ListaUsuarios.vue';
</script>

<template>
	<section>
		<card-redirect-add-usuario
			class="mt-10 mb-10"
		></card-redirect-add-usuario>

		<lista-usuarios></lista-usuarios>
	</section>
</template>

<style scoped></style>
