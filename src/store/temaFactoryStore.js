import { defineStore } from 'pinia';
import {
	buscarItemLocalStorage,
	salvarItemLocalStorage,
} from '../utils/localStorage';

export const useTemaFactoryStore = defineStore('tema', {
	state: () => {
		return {
			keyStorage: 'user_theme',
			temasOpcoes: ['light', 'dark'],
			temaPreferido: 'light',
		};
	},

	getters: {
		getOpcoesTema(state) {
			return state.temasOpcoes;
		},

		getTemaPreferido(state) {
			let temaStorage = buscarItemLocalStorage(state.keyStorage);

			if (temaStorage) {
				state.temaPreferido = temaStorage;
			}

			return state.temaPreferido;
		},
	},

	actions: {
		setTemaPreferido(tema) {
			salvarItemLocalStorage(this.keyStorage, tema);

			this.temaPreferido = tema;
		},
	},
});
