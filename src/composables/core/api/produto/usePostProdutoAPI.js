import { postProduto } from '@/services/produtoService';
import { useProdutoStore } from '@/store/produtoStore';
import { useRetornoResponseApiModel } from '../../model/useRetornoResponseApiModel';

export const usePostProdutoAPI = () => {
	const produtoStore = useProdutoStore();

	async function sendProduto(produtoObj) {
		try {
			const response = await postProduto(produtoObj);

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
			console.error('error :>> post produto: ', error);

			return useRetornoResponseApiModel({
				sucesso: false,
				conteudo: null,
				status: error.status,
			});
		}
	}

	return {
		sendProduto,
	};
};
