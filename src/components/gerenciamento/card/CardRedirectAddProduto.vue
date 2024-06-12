<script setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const redirecionarNovoProduto = () => {
		router.push({ name: 'ProdutoInput[ID]View' });
	};
</script>

<template>
	<v-card
		v-bind="{ ...$attrs }"
		prepend-icon="mdi-account-multiple-plus"
		append-icon="mdi-arrow-right-thin-circle-outline"
		max-width="345"
		title="Adicionar novo produto"
		subtitle="Redirecionamento para o formulário."
		color="deep-purple"
		class="mx-auto"
		@click="redirecionarNovoProduto"
	></v-card>
</template>

<style scoped></style>
