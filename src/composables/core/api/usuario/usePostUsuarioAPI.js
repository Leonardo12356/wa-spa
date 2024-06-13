import { postUsuario } from '@/services/usuarioService';
import { useUsuarioStore } from '@/store/usuarioStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const usePostUsuarioAPI = () => {
	const usuarioStore = useUsuarioStore();

	async function sendUsuario(usuarioObj) {
		try {
			const response = await postUsuario(usuarioObj);

			if (response.status === 201) {
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
			console.error('error :>> post usuario: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendUsuario,
	};
};
