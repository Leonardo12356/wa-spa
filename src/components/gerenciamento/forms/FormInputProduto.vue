<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { usePostProdutoAPI } from '../../../composables/core/api/produto/usePostProdutoAPI';
	import { useRouter } from 'vue-router';
	import { useUpdateProdutoAPI } from '../../../composables/core/api/produto/useUpdateProdutoAPI';

	const props = defineProps({
		formModoEditar: {
			type: Boolean,
			default: false,
		},
		produtoEdicao: {
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

	const produtoForm = ref({
		nome: '',
		quantidadeEstoque: 0,
		valorCusto: 0,
		valorVenda: 0,
		observacao: '',
	});

	const contemProdutoObjEdicao = computed(
		() => Object.keys(props.produtoEdicao).length > 0,
	);

	const { sendProduto } = usePostProdutoAPI();
	const { sendUpdateProduto } = useUpdateProdutoAPI();

	const redirecionarGerenciarProdutos = () => {
		router.push({ name: 'GerenciarProdutosView' });
	};

	const enviarForm = async () => {
		if (props.formModoEditar) {
			sendUpdateProduto(produtoForm.value.id, produtoForm.value);

			redirecionarGerenciarProdutos();

			return;
		}

		await sendProduto(produtoForm.value);

		redirecionarGerenciarProdutos();

		return;
	};

	const resetarForm = () => {
		KEY_FORM.value = Math.random();

		// Object.assign(produtoForm, baseForm);
		produtoForm.value = { ...baseForm.value };

		if (props.formModoEditar) {
			redirecionarGerenciarProdutos();
		}
	};

	const mapProdutoParaEdicao = () => {
		produtoForm.value.id = props.produtoEdicao.id;
		produtoForm.value.nome = props.produtoEdicao.nome;
		produtoForm.value.quantidadeEstoque =
			props.produtoEdicao.quantidadeEstoque;
		produtoForm.value.valorCusto = props.produtoEdicao.valorCusto;
		produtoForm.value.valorVenda = props.produtoEdicao.valorVenda;
		produtoForm.value.observacao = props.produtoEdicao.observacao;
	};

	onMounted(() => {
		if (props.formModoEditar && contemProdutoObjEdicao.value) {
			mapProdutoParaEdicao();
		}
	});
</script>

<template>
	<v-form v-model="formValido" :key="KEY_FORM">
		<v-row>
			<v-col cols="12">
				<v-text-field
					v-model="produtoForm.nome"
					label="Nome"
					hide-details
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" md="4">
				<v-text-field
					v-model="produtoForm.quantidadeEstoque"
					label="Quantidade estoque"
					type="number"
					:counter="11"
					hide-details
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="4">
				<v-text-field
					v-model="produtoForm.valorCusto"
					label="Valor de custo"
					type="number"
					hide-details
					required
				></v-text-field>
			</v-col>

			<v-col cols="12" md="4">
				<v-text-field
					v-model="produtoForm.valorVenda"
					label="Valor de venda"
					type="number"
					:counter="11"
					hide-details
					required
				></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-textarea
					v-model="produtoForm.observacao"
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
