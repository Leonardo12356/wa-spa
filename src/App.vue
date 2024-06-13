<script setup>
	import { computed, onMounted } from 'vue';
	import { RouterView } from 'vue-router';
	import { logDevelopment } from './utils/logDevelopment';
	import { useTemaFactoryStore } from './store/temaFactoryStore';
	import TheNavbar from './components/nav/TheNavbar.vue';

	const temaStore = useTemaFactoryStore();

	const temaPreferido = computed(() => temaStore.getTemaPreferido);

	onMounted(() => {
		logDevelopment('api', import.meta.env.VITE_API_URL);
	});
</script>

<template>
	<v-theme-provider :theme="temaPreferido">
		<v-app>
			<v-main>
				<the-navbar v-if="$route.meta.showNavbar"></the-navbar>

				<router-view />
			</v-main>
		</v-app>
	</v-theme-provider>
</template>

<style scoped></style>
