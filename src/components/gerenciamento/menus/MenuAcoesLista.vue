<script setup>
	const props = defineProps(['item']);

	const emits = defineEmits(['onMaisInfo', 'onEditarItem', 'onDeleteItem']);
</script>

<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<v-btn color="" variant="text" v-bind="props">
				<v-icon icon="mdi-dots-vertical"></v-icon>
			</v-btn>
		</template>

		<v-list>
			<v-list-item
				class="cursor-pointer"
				@click="$emit('onEditarItem', props.item)"
			>
				<v-icon icon="mdi-pencil" size="small"></v-icon>
				<span class="ml-2">Editar</span>
			</v-list-item>

			<v-list-item
				class="cursor-pointer"
				@click="$emit('onDeleteItem', props.item)"
			>
				<v-icon icon="mdi-delete" size="small"></v-icon>
				<span class="ml-2">Deletar</span>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<style scoped></style>
