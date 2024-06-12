import http from './axios.config';

export async function getProdutos() {
	const rota = '/produto';

	return http.get(rota);
}

export async function getProdutoByID(idProduto) {
	const rota = '/produto';

	return http.get(`${rota}/${idProduto}`);
}

export async function getProdutosQuantidadeTotal() {
	const rota = '/produto/produtos/quantidade-total';
	// const rota = '/produtos-quantidade-total';

	return http.get(rota);
}

export async function postProduto(produtoObj) {
	const rota = '/produto';

	return http.post(rota, produtoObj);
}

export async function putProduto(idProduto, attProdutoObj) {
	const rota = '/produto';

	return http.put(`${rota}/${idProduto}`, attProdutoObj);
}

export async function deleteProduto(idProduto) {
	const rota = '/produto';

	return http.delete(`${rota}/${idProduto}`);
}

export async function getMaiorEstoqueProduto() {
	const rota = '/produto/produtos/maior-estoque';
	// const rota = '/maior-estoque';

	return http.get(rota, {
		params: {
			quantidade: '10',
		},
	});
}

export async function getMenorEstoqueProduto() {
	const rota = '/produto/produtos/estoque-zerado-negativo';
	// const rota = '/menor-estoque';

	return http.get(rota, {
		params: {
			quantidade: '10',
		},
	});
}
