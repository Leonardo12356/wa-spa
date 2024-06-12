export const useRetornoResponseApiModel = ({
	sucesso = false,
	conteudo = null,
	status = 0,
}) => {
	return {
		sucesso: sucesso,
		conteudo: conteudo,
		status: status,
	};
};
