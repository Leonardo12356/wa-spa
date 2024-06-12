import { getProdutos } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetProdutosAPI = () => {
	const produtoStore = useProdutoStore();

	async function fetchProdutos() {
		try {
			const response = await getProdutos();

			if (response.status === 200) {
				produtoStore.setProdutos(response.data);

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
			console.error('error :>> fetch produtos: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchProdutos,
	};
};
