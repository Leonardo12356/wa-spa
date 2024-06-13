import { putUsuario } from '@/services/usuarioService';
import { useUsuarioStore } from '@/store/usuarioStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useUpdateUsuarioAPI = () => {
	const usuarioStore = useUsuarioStore();

	async function sendUpdateUsuario(usuarioID, usuarioObj) {
		try {
			const response = await putUsuario(usuarioID, usuarioObj);

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
			console.error('error :>> update usuario: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendUpdateUsuario,
	};
};
