import { getMenorEstoqueProduto } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetProdutosMenorEstoqueAPI = () => {
	const produtoStore = useProdutoStore();

	async function fetchProdutosMenorEstoque() {
		try {
			const response = await getMenorEstoqueProduto();

			if (response.status === 200) {
				produtoStore.setProdutosMenorEstoque(response.data);

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
			console.error('error :>> fetch menor estoque produtos: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchProdutosMenorEstoque,
	};
};
