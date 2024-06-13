import http from './axios.config';

export async function autenticarUsuario(email, senha) {
  const rota = '/usuarios/login';
  const payload = { email, senha };
  return http.post(rota, payload);
}

export async function postUsuario(usuarioObj) {
  const rota = '/usuarios';
  return http.post(rota, usuarioObj);
}

export async function getUsuarios() {
  const rota = '/usuarios';
  return http.get(rota);
}

export async function getUsuarioById(idUsuario) {
  const rota = `/usuarios/${idUsuario}`;
  return http.get(rota);
}

export async function putUsuario(idUsuario, dadosAtualizados) {
  const rota = `/usuarios/${idUsuario}`;
  return http.put(rota, dadosAtualizados);
}

export async function deleteUsuario(idUsuario) {
  const rota = `/usuarios/${idUsuario}`;
  return http.delete(rota);
}
