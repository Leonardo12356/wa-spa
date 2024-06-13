<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { usePostUsuarioAPI } from '../../../composables/core/api/usuario/usePostUsuarioAPI';
	import { useRouter } from 'vue-router';
	import { useUpdateUsuarioAPI } from '../../../composables/core/api/usuario/useUpdateUsuarioAPI';

	const props = defineProps({
		formModoEditar: {
			type: Boolean,
			default: false,
		},
		usuarioEdicao: {
			type: Object,
			default: {},
		},
	});

	const router = useRouter();

	const formValido = ref(false);

	const KEY_FORM = ref(1);

	const baseForm = ref({
		nome: '',
		quantidadeEstoque: 0,
		valorCusto: 0,
		valorVenda: 0,
		observacao: '',
		});

const usuarioForm = ref({
		email: '',
		senha: '',
		perfil: '',
		dataCadastro: '',
		dataInativacao: null,
		});

	const contemUsuarioObjEdicao = computed(
		() => Object.keys(props.usuarioEdicao).length > 0,
	);

	const { sendUsuario } = usePostUsuarioAPI();
	const { sendUpdateUsuario } = useUpdateUsuarioAPI();

	const redirecionarGerenciarUsuarios = () => {
		router.push({ name: 'GerenciarUsuariosView' });
	};

	const enviarForm = async () => {
		if (props.formModoEditar) {
			sendUpdateUsuario(usuarioForm.value.id, usuarioForm.value);

			redirecionarGerenciarUsuarios();

			return;
		}

		await sendUsuario(usuarioForm.value);

		redirecionarGerenciarUsuarios();

		return;
	};

	const resetarForm = () => {
		KEY_FORM.value = Math.random();

		usuarioForm.value = { ...baseForm.value };

		if (props.formModoEditar) {
			redirecionarGerenciarUsuarios();
		}
	};

	const mapUsuarioParaEdicao = () => {
		usuarioForm.value.email = props.usuarioEdicao.email;
		usuarioForm.value.senha = ''; 
		usuarioForm.value.perfil = props.usuarioEdicao.perfil;
		usuarioForm.value.dataCadastro = props.usuarioEdicao.dataCadastro;
		usuarioForm.value.dataInativacao = props.usuarioEdicao.dataInativacao;
	};

	onMounted(() => {
		if (props.formModoEditar && contemUsuarioObjEdicao.value) {
			mapUsuarioParaEdicao();
		}
	});
</script>

<template>
	<v-form v-model="formValido" :key="KEY_FORM">
	  <v-row>
		<v-col cols="12">
		  <v-text-field v-model="usuarioForm.email" label="E-mail" hide-details required></v-text-field>
		</v-col>
	  </v-row>
  
	  <v-row>
		<v-col cols="12" md="6">
		  <v-text-field v-model="usuarioForm.senha" label="Senha" hide-details required></v-text-field>
		</v-col>
  
		<v-col cols="12" md="6">
		  <v-text-field v-model="usuarioForm.perfil" label="Perfil" hide-details required></v-text-field>
		</v-col>
	  </v-row>
  
	  <v-row>
		<v-col cols="12" md="6">
		  <v-text-field v-model="usuarioForm.dataCadastro" label="Data de Cadastro" hide-details required></v-text-field>
		</v-col>
  
		<v-col cols="12" md="6">
		  <v-text-field v-model="usuarioForm.dataInativacao" label="Data de Inativação" hide-details></v-text-field>
		</v-col>
	  </v-row>
  
	  <section class="d-flex flex-wrap justify-end ga-3 mt-5">
		<v-btn class="" color="deep-purple-accent-2" @click="enviarForm">Enviar</v-btn>
		<v-btn @click="resetarForm">Cancelar</v-btn>
	  </section>
	</v-form>
  </template>
  
  <style scoped></style>
