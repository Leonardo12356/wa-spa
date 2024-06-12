<script setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const redirecionarNovoCliente = () => {
		router.push({ name: 'ClienteInput[ID]View' });
	};
</script>

<template>
	<v-card
		v-bind="{ ...$attrs }"
		prepend-icon="mdi-account-multiple-plus"
		append-icon="mdi-arrow-right-thin-circle-outline"
		max-width="345"
		title="Adicionar novo cliente"
		subtitle="Redirecionamento para o formulário."
		color="deep-purple"
		class="mx-auto"
		@click="redirecionarNovoCliente"
	></v-card>
</template>

<style scoped></style>
