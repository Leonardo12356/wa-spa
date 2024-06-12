<script setup>
	import { computed } from 'vue';
	import FormInputProduto from '../components/gerenciamento/forms/FormInputProduto.vue';
	import { useRoute } from 'vue-router';
	import { useProdutoStore } from '../store/produtoStore';

	const route = useRoute();

	const produtoStore = useProdutoStore();

	const contemParametroID = computed(() =>
		Object.keys(route.params).includes('idProduto'),
	);

	const produtoParaEdicao = computed(
		() => produtoStore.getProdutoSelecionado,
	);
</script>

<template>
	<v-container>
		<h6 class="text-h6 mt-5 mb-5">
			{{ contemParametroID ? 'Editar' : 'Adicionar' }} produto:
		</h6>

		<form-input-produto
			:form-modo-editar="contemParametroID"
			:produto-edicao="produtoParaEdicao"
		></form-input-produto>
	</v-container>
</template>

<style scoped></style>
