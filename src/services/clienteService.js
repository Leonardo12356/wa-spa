import http from './axios.config';

export async function getClientes() {
	const rota = '/cliente';

	return http.get(rota);
}

export async function getClienteByID(idCliente) {
	const rota = '/cliente';

	return http.get(`${rota}/${idCliente}`);
}

export async function getClientesQuantidadeTotal() {
	/**
	 * @todo retornar para a rota original
	 */
	// const rota = '/cliente/clientes/quantidade-total';
	const rota = '/clientes-quantidade-total';

	return http.get(rota);
}

export async function postCliente(clienteObj) {
	const rota = '/cliente';

	return http.post(rota, clienteObj);
}

export async function putCliente(idCliente, attClienteObj) {
	const rota = '/cliente';

	return http.put(`${rota}/${idCliente}`, attClienteObj);
}

export async function deleteCliente(idCliente) {
	const rota = '/cliente';

	return http.delete(`${rota}/${idCliente}`);
}
