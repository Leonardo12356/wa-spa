import { putCliente } from '@/services/clienteService';
import { useClienteStore } from '@/store/clienteStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useUpdateClienteAPI = () => {
	const clienteStore = useClienteStore();

	async function sendUpdateCliente(clienteID, clienteObj) {
		try {
			const response = await putCliente(clienteID, clienteObj);

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
			console.error('error :>> update cliente: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendUpdateCliente,
	};
};
