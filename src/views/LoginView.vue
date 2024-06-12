<script setup>
import { ref } from 'vue';
import InputComponent from '@/components/input/InputComponent.vue';
import ButtonComponent from '@/components/button/ButtonComponent.vue';

const usuario = ref({
  email: '',
  senha: ''
});

const login = () => {
//TODO implemntar a logica
  console.log('Login:', usuario.value);
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
      :callback="login" 
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
