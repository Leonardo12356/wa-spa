<script setup>
	import { computed, onMounted, ref } from 'vue';
	import MenuAcoesLista from '../menus/MenuAcoesLista.vue';
	import { useUsuarioStore } from '../../../store/usuarioStore';
	import { useGetUsuariosAPI } from '../../../composables/core/api/usuario/useGetUsuariosAPI';
	import { useRouter } from 'vue-router';
	import { useDeleteUsuarioAPI } from '../../../composables/core/api/usuario/useDeleteUsuarioAPI';

	const router = useRouter();

	const usuarioStore = useUsuarioStore();

	const colunas = ref([
	{
		title: 'ID',
		align: 'center',
		sortable: false,
		key: 'id',
	},
	{
		title: 'Email',
		align: 'center',
		sortable: false,
		key: 'email',
	},
	{
		title: 'Perfil',
		align: 'center',
		sortable: false,
		key: 'perfil',
	},
	{
		title: 'Ações',
		align: 'center',
		sortable: false,
		key: 'actions',
	},
]);
	const usuarios = computed(() => usuarioStore.getUsuarios);

	const { fetchUsuarios } = useGetUsuariosAPI();
	const { sendDeleteUsuario } = useDeleteUsuarioAPI();

	const editarUsuario = (usuario) => {
		usuarioStore.setUsuarioSelecionado(usuario);

		router.push({
			name: 'UsuarioInput[ID]View',
			params: { idUsuario: usuario.id },
		});
	};

	const removerUsuario = async (usuario) => {
		await sendDeleteUsuario(usuario.id);

		location.reload();
	};

	onMounted(async () => {
		await fetchUsuarios();
	});
</script>

<template>
	<v-container>
		<v-data-table :headers="colunas" :items="usuarios">
			<template v-slot:item.actions="{ item }">
				<menu-acoes-lista
					:item="item"
					@on-editar-item="editarUsuario"
					@on-delete-item="removerUsuario"
				></menu-acoes-lista>
			</template>
		</v-data-table>
	</v-container>
</template>

<style scoped></style>
