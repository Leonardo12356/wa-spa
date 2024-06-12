import { defineStore } from 'pinia';

export const useProdutoStore = defineStore('produto', {
	state: () => {
		return {
			produtoSelecionado: null,
			produtos: [],
			totalProdutos: 0,
			produtosMaiorEstoque: [],
			produtosMenorEstoque: [],
		};
	},

	getters: {
		getProdutoSelecionado(state) {
			return state.produtoSelecionado;
		},

		getProdutos(state) {
			return state.produtos;
		},

		getProdutosQuantidadeTotal(state) {
			return state.totalProdutos;
		},

		getProdutosMaiorEstoque(state) {
			return state.produtosMaiorEstoque;
		},

		getProdutosMenorEstoque(state) {
			return state.produtosMenorEstoque;
		},
	},

	actions: {
		setProdutoSelecionado(cliente) {
			this.produtoSelecionado = cliente;
		},

		setProdutos(produtos) {
			this.produtos = produtos;
		},

		setProdutosQuantidadeTotal(total) {
			this.totalProdutos = total;
		},

		setProdutosMaiorEstoque(produtosEstoque) {
			this.produtosMaiorEstoque = produtosEstoque;
		},

		setProdutosMenorEstoque(produtosEstoque) {
			this.produtosMenorEstoque = produtosEstoque;
		},
	},
});
