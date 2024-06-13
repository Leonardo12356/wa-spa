<script setup>
	import { ref } from "vue";
	import InputComponent from "@/components/input/InputComponent.vue";
	import { useRouter } from "vue-router";
	import { autenticarUsuario } from "@/services/usuarioService.js";
	import { useUsuarioStore } from "@/store/usuarioStore";

	const router = useRouter();

	const usuarioStore = useUsuarioStore();

	const usuario = ref({
		email: "",
		senha: "",
	});

	const login = async () => {
		try {
			let response = await autenticarUsuario(
				usuario.value.email,
				usuario.value.senha
			);

			if (response.status === 200) {
				usuarioStore.setUsuarioToken(response.data.token);
				usuarioStore.setUsuarioLogado(response.data);

				router.push({ name: "DashboardView" });
			}
		} catch (error) {
			console.error("error :>> login: ", error);
		}
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
		/><div class="centralizarBotao">
      <v-btn @click="login">Entrar</v-btn>
    </div>
  </div>
</template>

<style scoped>
	.box-login {
		width: 300px;
		margin: auto;
		border: 1px solid #ddd;
		margin-top: 70px;
		padding: 30px;
    align-items: center; 
	}

	.logo {
		text-align: center;
		color: var(--vt-c-indigo);
		font-size: 22px;
	}
  .centralizarBotao{
    margin-top: 1rem;
    text-align: center;
  }
</style>
