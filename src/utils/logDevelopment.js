export function logDevelopment(titulo, value) {
	let mode = process.env.NODE_ENV;

	return mode === 'development' ? console.log(`${titulo} :>> ${value}`) : '';
}
