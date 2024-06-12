<script setup>
	import { computed, onMounted, ref } from 'vue';
	import MenuAcoesLista from '../menus/MenuAcoesLista.vue';
	import { useProdutoStore } from '../../../store/produtoStore';
	import { useGetProdutosAPI } from '../../../composables/core/api/produto/useGetProdutosAPI';
	import { useRouter } from 'vue-router';
	import { useDeleteProdutoAPI } from '../../../composables/core/api/produto/useDeleteProdutoAPI';

	const router = useRouter();

	const produtoStore = useProdutoStore();

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
			title: 'Quantidade estoque',
			align: 'center',
			sortable: false,
			key: 'quantidadeEstoque',
		},
		{
			title: 'Ações',
			align: 'center',
			sortable: false,
			key: 'actions',
		},
	]);

	const produtos = computed(() => produtoStore.getProdutos);

	const { fetchProdutos } = useGetProdutosAPI();
	const { sendDeleteProduto } = useDeleteProdutoAPI();

	const editarProduto = (produto) => {
		produtoStore.setProdutoSelecionado(produto);

		router.push({
			name: 'ProdutoInput[ID]View',
			params: { idProduto: produto.id },
		});
	};

	const removerProduto = async (produto) => {
		await sendDeleteProduto(produto.id);

		location.reload();
	};

	onMounted(async () => {
		await fetchProdutos();
	});
</script>

<template>
	<v-container>
		<v-data-table :headers="colunas" :items="produtos">
			<template v-slot:item.actions="{ item }">
				<menu-acoes-lista
					:item="item"
					@on-editar-item="editarProduto"
					@on-delete-item="removerProduto"
				></menu-acoes-lista>
			</template>
		</v-data-table>
	</v-container>
</template>

<style scoped></style>
