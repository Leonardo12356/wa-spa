<script setup>
	import ButtonTheme from '@/components/buttons/ButtonTheme.vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
</script>

<template>
	<v-app-bar
		class="border-b"
		color="indigo-lighten-1"
		rounded
		:elevation="4"
		density="compact"
	>
		<template v-slot:prepend>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title>LOGO</v-app-bar-title>

		<section class="links">
			<router-link :to="{ name: 'DashboardView' }" class="mr-6">
				Dashboard
			</router-link>

			<router-link to="#" class="mr-6"> Gerenciamento </router-link>
		</section>

		<v-spacer></v-spacer>

		<button-theme></button-theme>
	</v-app-bar>
</template>

<style scoped>
	a {
		color: var(--vt-c-branco-soft);
		text-decoration: none;
	}
</style>
