import { getClientesQuantidadeTotal } from '@/services/clienteService';
import { useClienteStore } from '@/store/clienteStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetTotalClientesAPI = () => {
	const clienteStore = useClienteStore();

	async function fetchTotalClientes() {
		try {
			const response = await getClientesQuantidadeTotal();

			if (response.status === 200) {
				clienteStore.setClientesQuantidadeTotal(response.data);

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
			console.error('error :>> fetch total clientes: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchTotalClientes,
	};
};
