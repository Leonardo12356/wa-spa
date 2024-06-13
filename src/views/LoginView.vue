<script setup>
import { ref } from 'vue';
import InputComponent from '@/components/input/InputComponent.vue';
import ButtonComponent from '@/components/buttons/ButtonTheme.vue';
import { useRouter } from 'vue-router';
import {} from '@/services/usuarioService.js';
import utilsStorage from '@/utils/localStorage.js';

const router = useRouter();
const usuario = ref({
  email: '',
  senha: ''
});


const login = () => {
  usuarioService.autenticarUsuario(usuario.value.email, usuario.value.senha)
    .then(response => {
      utilsStorage.salvarItemLocalStorage(usuario.value);
      utilsStorage.salvarTokenNaStorage(response.data.token);
      router.push({ name: "DashboardView" });
    })
    .catch(error => {
      console.log(error);
    });
};
</script>

<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>
    <InputComponent 
      label="E-mail" 
      placeHolder="exemplo@gmail.com" 
      v-model="usuario.email"
    />
    <InputComponent 
      label="Senha" 
      placeHolder="123456" 
      type="password" 
      v-model="usuario.senha"
    />
    <ButtonComponent 
      value="Entrar" 
      @click="login" 
    />
  </div>
</template>

<style scoped>
.box-login {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 70px;
  padding: 30px;
}

.logo {
  text-align: center;
  color: var(--vt-c-indigo);
  font-size: 22px;
}
</style>
