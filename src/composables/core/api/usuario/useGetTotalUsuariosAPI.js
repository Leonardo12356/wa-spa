import { getUsuariosQuantidadeTotal } from '@/services/usuarioService';
import { useUsuarioStore } from '@/store/usuarioStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetTotalUsuariosAPI = () => {
	const usuarioStore = useUsuarioStore();

	async function fetchTotalUsuarios() {
		try {
			const response = await getUsuariosQuantidadeTotal();

			if (response.status === 200) {
				usuarioStore.setUsuariosQuantidadeTotal(response.data);

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
			console.error('error :>> fetch total usuarios: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchTotalUsuarios,
	};
};
