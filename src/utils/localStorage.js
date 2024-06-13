export function salvarItemLocalStorage(key, value) {
	return localStorage.setItem(key, JSON.stringify(value));
}

export function buscarItemLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

export function removerItemLocalStorage(key) {
	return localStorage.removeItem(key);
}

export function limparLocalStorage() {
	return localStorage.clear();
}

export function salvarTokenNaStorage(token){
    localStorage.setItem('token', token);
}




