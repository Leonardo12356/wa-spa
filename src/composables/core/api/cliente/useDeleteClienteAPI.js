import { deleteCliente } from '@/services/clienteService';
import { useClienteStore } from '@/store/clienteStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useDeleteClienteAPI = () => {
	const clienteStore = useClienteStore();

	async function sendDeleteCliente(idCliente) {
		try {
			const response = await deleteCliente(idCliente);

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
			console.error('error :>> delete cliente: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendDeleteCliente,
	};
};
