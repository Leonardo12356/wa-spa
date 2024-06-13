import { defineStore } from "pinia";
import {
	salvarTokenNaStorage,
	salvarItemLocalStorage,
	buscarItemLocalStorage,
} from "@/utils/localStorage.js";

export const useUsuarioStore = defineStore("usuario", {
	state: () => ({
		token: null,
		usuarioLogado: null,
		usuarios: [],
		usuarioSelecionado: null,
	}),

	getters: {
		getUsuarioToken(state) {
			return state.token;
		},

		getUsuarioLogado(state) {
			let usuarioStorage = buscarItemLocalStorage("usuario");

			if (usuarioStorage) {
				state.usuarioLogado = usuarioStorage;
			}

			return state.usuarioLogado;
		},

		getUsuarios(state) {
			return state.usuarios;
		},

		getUsuarioSelecionado(state) {
			return state.usuarioSelecionado;
		},
	},

	actions: {
		setUsuarioToken(token) {
			this.token = token;

			salvarTokenNaStorage(token);
		},

		setUsuarioLogado(usuario) {
			this.usuarioLogado = usuario;

			salvarItemLocalStorage("usuario", usuario);
		},

		setUsuarios(usuarios) {
			this.usuarios = usuarios;
		},

		setUsuarioSelecionado(usuario) {
			this.usuarioSelecionado = usuario;
		},
	},
});
