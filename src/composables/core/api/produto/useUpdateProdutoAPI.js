import { putProduto } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const useUpdateProdutoAPI = () => {
	const produtoStore = useProdutoStore();

	async function sendUpdateProduto(produtoID, produtoObj) {
		try {
			const response = await putProduto(produtoID, produtoObj);

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
			console.error('error :>> update produto: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendUpdateProduto,
	};
};
