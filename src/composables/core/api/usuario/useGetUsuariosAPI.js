import { getUsuarios } from '@/services/usuarioService.js';
import { useUsuarioStore } from '@/store/usuarioStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetusuariosAPI = () => {
	const usuarioStore = useUsuarioStore();

	async function fetchUsuarios() {
		try {
			const response = await getUsuarios();

			if (response.status === 200) {
				usuarioStore.setusuarios(response.data);

				return useRetornoResponseApiModel({
					sucesso: true,
					conteudo: response.data,
					status: response.status,
				});
			}

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: response.status,
			});
		} catch (error) {
			console.error('error :>> fetch usuarios: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchUsuarios,
	};
};
