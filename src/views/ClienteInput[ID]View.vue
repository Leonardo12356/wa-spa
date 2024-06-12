<script setup>
	import { computed } from 'vue';
	import FormInputCliente from '../components/gerenciamento/forms/FormInputCliente.vue';
	import { useRoute } from 'vue-router';
	import { useClienteStore } from '../store/clienteStore';

	const route = useRoute();

	const clienteStore = useClienteStore();

	const contemParametroID = computed(() =>
		Object.keys(route.params).includes('idCliente'),
	);

	const clienteParaEdicao = computed(
		() => clienteStore.getClienteSelecionado,
	);
</script>

<template>
	<v-container>
		<h6 class="text-h6 mt-5 mb-5">
			{{ contemParametroID ? 'Editar' : 'Adicionar' }} cliente:
		</h6>

		<form-input-cliente
			:form-modo-editar="contemParametroID"
			:cliente-edicao="clienteParaEdicao"
		></form-input-cliente>
	</v-container>
</template>

<style scoped></style>
