import { deleteUsuario } from '@/services/usuarioService';
import { useUsuarioStore } from '@/store/usuarioStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useDeleteUsuarioAPI = () => {
	const usuarioStore = useUsuarioStore();

	async function sendDeleteUsuario(idusuario) {
		try {
			const response = await deleteUsuario(idusuario);

			if (response.status === 204) {
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
			console.error('error :>> delete usuario: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendDeleteUsuario,
	};
};
