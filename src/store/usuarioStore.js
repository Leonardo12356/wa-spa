import { defineStore } from 'pinia';

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    usuarios: [],
    usuarioSelecionado: null,
  }),

  getters: {
    getUsuarios(state) {
      return state.usuarios;
    },

    getUsuarioSelecionado(state) {
      return state.usuarioSelecionado;
    },
  },

  actions: {
    setUsuarios(usuarios) {
      this.usuarios = usuarios;
    },

    setUsuarioSelecionado(usuario) {
      this.usuarioSelecionado = usuario;
    },
  },
});
