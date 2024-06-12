import { defineStore } from 'pinia';

export const useClienteStore = defineStore('cliente', {
	state: () => {
		return {
			clienteSelecionado: null,
			clientes: [],
			totalClientes: 0,
		};
	},

	getters: {
		getClienteSelecionado(state) {
			return state.clienteSelecionado;
		},

		getClientes(state) {
			return state.clientes;
		},

		getClientesQuantidadeTotal(state) {
			return state.totalClientes;
		},
	},

	actions: {
		setClienteSelecionado(cliente) {
			this.clienteSelecionado = cliente;
		},

		setClientes(clientes) {
			this.clientes = clientes;
		},

		setClientesQuantidadeTotal(total) {
			this.totalClientes = total;
		},
	},
});
