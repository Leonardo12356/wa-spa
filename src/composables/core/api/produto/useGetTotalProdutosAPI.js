import { getProdutosQuantidadeTotal } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetTotalProdutosAPI = () => {
	const produtoStore = useProdutoStore();

	async function fetchTotalProdutos() {
		try {
			const response = await getProdutosQuantidadeTotal();

			if (response.status === 200) {
				produtoStore.setProdutosQuantidadeTotal(response.data);

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
			console.error('error :>> fetch total produtos: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchTotalProdutos,
	};
};
