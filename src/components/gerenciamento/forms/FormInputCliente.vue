<script setup>
	import { onMounted, ref } from 'vue';
	import { usePostClienteAPI } from '../../../composables/core/api/cliente/usePostClienteAPI';
	import { useRouter } from 'vue-router';
	import { useUpdateClienteAPI } from '../../../composables/core/api/cliente/useUpdateClienteAPI';

	const props = defineProps({
		formModoEditar: {
			type: Boolean,
			default: false,
		},
		clienteEdicao: {
			type: Object,
			default: {},
		},
	});

	const router = useRouter();

	const formValido = ref(false);

	const KEY_FORM = ref(1);

	const baseForm = ref({
		id: 0,
		nome: '',
		email: '',
		cpf: '',
		telefone: '',
		endereco: '',
		observacao: '',
		usuarioId: 1,
	});

	const clienteForm = ref({
		id: 0,
		nome: '',
		email: '',
		cpf: '',
		telefone: '',
		endereco: '',
		observacao: '',
		usuarioId: 1,
	});

	const { sendCliente } = usePostClienteAPI();
	const { sendUpdateCliente } = useUpdateClienteAPI();

	const redirecionarGerenciarClientes = () => {
		router.push({ name: 'GerenciarClientesView' });
	};

	const enviarForm = async () => {
		if (props.formModoEditar) {
			sendUpdateCliente(clienteForm.value.id, clienteForm.value);

			redirecionarGerenciarClientes();

			return;
		}

		await sendCliente(clienteForm.value);

		redirecionarGerenciarClientes();

		return;
	};

	const resetarForm = () => {
		KEY_FORM.value = Math.random();

		// Object.assign(clienteForm, baseForm);
		clienteForm.value = { ...baseForm.value };

		if (props.formModoEditar) {
			redirecionarGerenciarClientes();
		}
	};

	const mapClienteParaEdicao = () => {
		clienteForm.value.id = props.clienteEdicao.id;
		clienteForm.value.nome = props.clienteEdicao.nome;
		clienteForm.value.email = props.clienteEdicao.email;
		clienteForm.value.cpf = props.clienteEdicao.cpf;
		clienteForm.value.telefone = props.clienteEdicao.telefone;
		clienteForm.value.endereco = props.clienteEdicao.endereco;
		clienteForm.value.observacao = props.clienteEdicao.observacao;
		clienteForm.value.usuarioId = props.clienteEdicao.usuarioId;
	};

	onMounted(() => {
		if (props.formModoEditar) {
			mapClienteParaEdicao();
		}
	});
</script>

<template>
	<v-form v-model="formValido" :key="KEY_FORM">
		<v-row>
			<v-col cols="12" md="4">
				<v-text-field
					v-model="clienteForm.nome"
					label="Nome"
					hide-details
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="4">
				<v-text-field
					v-model="clienteForm.cpf"
					:counter="11"
					label="CPF"
					hide-details
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="4">
				<v-text-field
					v-model="clienteForm.email"
					label="E-mail"
					hide-details
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" md="4">
				<v-text-field
					v-model="clienteForm.telefone"
					:counter="11"
					label="Telefone"
					hide-details
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="8">
				<v-text-field
					v-model="clienteForm.endereco"
					label="Endereço"
					hide-details
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-textarea
					v-model="clienteForm.observacao"
					label="Observação"
					hide-details
				></v-textarea>
			</v-col>
		</v-row>

		<section class="d-flex flex-wrap justify-end ga-3 mt-5">
			<v-btn class="" color="deep-purple-accent-2" @click="enviarForm">
				Enviar
			</v-btn>

			<v-btn @click="resetarForm"> Cancelar </v-btn>
		</section>
	</v-form>
</template>

<style scoped></style>
