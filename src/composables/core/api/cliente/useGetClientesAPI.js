import { getClientes } from '@/services/clienteService';
import { useClienteStore } from '@/store/clienteStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetClientesAPI = () => {
	const clienteStore = useClienteStore();

	async function fetchClientes() {
		try {
			const response = await getClientes();

			if (response.status === 200) {
				clienteStore.setClientes(response.data);

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
			console.error('error :>> fetch clientes: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchClientes,
	};
};
