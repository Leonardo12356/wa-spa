<script setup>
	import { computed, onMounted, ref } from 'vue';
	import MenuAcoesLista from '../menus/MenuAcoesLista.vue';
	import { useClienteStore } from '../../../store/clienteStore';
	import { useGetClientesAPI } from '../../../composables/core/api/cliente/useGetClientesAPI';
	import { useRouter } from 'vue-router';
	import { useDeleteClienteAPI } from '../../../composables/core/api/cliente/useDeleteClienteAPI';

	const router = useRouter();

	const clienteStore = useClienteStore();

	const colunas = ref([
		{
			title: 'ID',
			align: 'center',
			sortable: false,
			key: 'id',
		},
		{
			title: 'Nome',
			align: 'center',
			sortable: false,
			key: 'nome',
		},
		{
			title: 'Ações',
			align: 'center',
			sortable: false,
			key: 'actions',
		},
	]);

	const paginacaoConfig = ref({
		paginaAtual: 1,
		itensPorPag: 5,
	});

	const clientes = computed(() => clienteStore.getClientes);

	const { fetchClientes } = useGetClientesAPI();
	const { sendDeleteCliente } = useDeleteClienteAPI();

	const carregarNovaPaginaClientes = () => {
		const proxPagina = paginacaoConfig.value.paginaAtual + 1;
		const quantidade = paginacaoConfig.value.itensPorPag;
		// api request
	};

	const editarCliente = (cliente) => {
		clienteStore.setClienteSelecionado(cliente);

		router.push({
			name: 'ClienteInput[ID]View',
			params: { idCliente: cliente.id },
		});
	};

	const removerCliente = async (cliente) => {
		await sendDeleteCliente(cliente.id);

		location.reload();
	};

	onMounted(async () => {
		await fetchClientes();
	});
</script>

<template>
	<v-container>
		<v-data-table :headers="colunas" :items="clientes">
			<template v-slot:item.actions="{ item }">
				<menu-acoes-lista
					:item="item"
					@on-editar-item="editarCliente"
					@on-delete-item="removerCliente"
				></menu-acoes-lista>
			</template>
		</v-data-table>
	</v-container>
</template>

<style scoped></style>
