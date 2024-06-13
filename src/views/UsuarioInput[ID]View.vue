<script setup>
	import { computed } from 'vue';
	import FormInputUsuario from '../components/gerenciamento/forms/FormInputUsuario.vue';
	import { useRoute } from 'vue-router';
	import { useUsuarioStore } from '../store/usuarioStore';

	const route = useRoute();

	const usuarioStore = useUsuarioStore();

	const contemParametroID = computed(() =>
		Object.keys(route.params).includes('idusuario'),
	);

	const usuarioParaEdicao = computed(
		() => usuarioStore.getUsuarioSelecionado,
	);
</script>

<template>
	<v-container>
		<h6 class="text-h6 mt-5 mb-5">
			{{ contemParametroID ? 'Editar' : 'Adicionar' }} usuario:
		</h6>

		<form-input-usuario
			:form-modo-editar="contemParametroID"
			:usuario-edicao="usuarioParaEdicao"
		></form-input-usuario>
	</v-container>
</template>

<style scoped></style>
