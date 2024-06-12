<script setup>
	import { computed, onMounted } from 'vue';
	import { useGetTotalClientesAPI } from '../../../composables/core/api/cliente/useGetTotalClientesAPI';
	import BaseCardItemQuantidade from './BaseCardItemQuantidade.vue';
	import { useRouter } from 'vue-router';
	import { useClienteStore } from '../../../store/clienteStore';

	const router = useRouter();

	const clienteStore = useClienteStore();

	const totalClientes = computed(
		() => clienteStore.getClientesQuantidadeTotal,
	);

	const { fetchTotalClientes } = useGetTotalClientesAPI();

	const redirecionarGerenciarClientes = () => {
		router.push({ name: 'GerenciarClientesView' });
	};

	onMounted(async () => {
		await fetchTotalClientes();
	});
</script>

<template>
	<base-card-item-quantidade
		icon-card="mdi-account"
		titulo="Clientes Ativos"
		:quantidade-item="totalClientes"
		@on-arrow-redirect="redirecionarGerenciarClientes"
	></base-card-item-quantidade>
</template>

<style scoped></style>
