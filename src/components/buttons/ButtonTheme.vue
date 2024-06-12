<script setup>
	import { computed, onMounted } from 'vue';
	import { useTemaFactoryStore } from '../../store/temaFactoryStore';

	const temaStore = useTemaFactoryStore();

	const temaPreferido = computed(() => temaStore.getTemaPreferido);

	const opcoesTemas = computed(() => temaStore.getOpcoesTema);

	const lightTemaKey = computed(() => opcoesTemas.value[0]);
	const darkTemaKey = computed(() => opcoesTemas.value[1]);

	const toggleTemaApp = () => {
		if (temaPreferido.value === darkTemaKey.value) {
			document.documentElement.setAttribute(
				'data-theme',
				lightTemaKey.value,
			);
			temaStore.setTemaPreferido(lightTemaKey.value);

			return;
		}

		document.documentElement.setAttribute('data-theme', darkTemaKey.value);
		temaStore.setTemaPreferido(darkTemaKey.value);

		return;
	};

	const detectarTemaApp = () => {
		if (temaPreferido.value === darkTemaKey.value) {
			document.documentElement.setAttribute(
				'data-theme',
				darkTemaKey.value,
			);
			temaStore.setTemaPreferido(darkTemaKey.value);

			return;
		}

		document.documentElement.setAttribute('data-theme', lightTemaKey.value);
		temaStore.setTemaPreferido(lightTemaKey.value);

		return;
	};

	onMounted(() => {
		detectarTemaApp();
	});
</script>

<template>
	<v-btn size="x-small" @click="toggleTemaApp">Alterar Tema</v-btn>
</template>
