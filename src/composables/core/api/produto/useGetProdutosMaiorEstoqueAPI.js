import { getMaiorEstoqueProduto } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useGetProdutosMaiorEstoqueAPI = () => {
	const produtoStore = useProdutoStore();

	async function fetchProdutosMaiorEstoque() {
		try {
			const response = await getMaiorEstoqueProduto();

			if (response.status === 200) {
				produtoStore.setProdutosMaiorEstoque(response.data);

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
			console.error('error :>> fetch estoque produtos: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		fetchProdutosMaiorEstoque,
	};
};
