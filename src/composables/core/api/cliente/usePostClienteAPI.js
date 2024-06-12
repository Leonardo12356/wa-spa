import { postCliente } from '@/services/clienteService';
import { useClienteStore } from '@/store/clienteStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const usePostClienteAPI = () => {
	const clienteStore = useClienteStore();

	async function sendCliente(clienteObj) {
		try {
			const response = await postCliente(clienteObj);

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
			console.error('error :>> post cliente: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendCliente,
	};
};
