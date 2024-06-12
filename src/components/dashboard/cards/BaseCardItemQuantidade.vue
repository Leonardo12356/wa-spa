<script setup>
	const props = defineProps({
		iconCard: {
			type: String,
			default: '',
		},
		titulo: {
			type: String,
			required: true,
		},
		quantidadeItem: {
			type: Number,
			required: true,
		},
	});

	const emits = defineEmits(['onArrowRedirect']);
</script>

<template>
	<v-card class="mx-auto rounded-lg">
		<template v-slot:title>
			<v-row align="center">
				<v-col cols="12" sm="2" lg="1">
					<v-avatar class="" color="indigo-accent-1">
						<v-icon :icon="iconCard"></v-icon>
					</v-avatar>
				</v-col>

				<v-col cols="12" sm="2" lg="1">
					<span class="font-weight-black">{{ titulo }}</span>
				</v-col>
			</v-row>
		</template>

		<v-card-text class="py-2">
			<v-row align="center" no-gutters>
				<v-col cols="12" sm="4" lg="2"> Quantidade: </v-col>

				<v-col
					class="text-h4 text-indigo-accent-1"
					cols="12"
					sm="4"
					lg="6"
				>
					{{ quantidadeItem }}
				</v-col>

				<v-col class="text-right" cols="12" sm="4" lg="4">
					<span
						class="arrow-redirect cursor-pointer"
						@click="$emit('onArrowRedirect')"
					>
						<v-icon
							icon="mdi-arrow-right"
							color="grey-darken-1"
							size="30"
							title="acessar área de gerenciamento"
							class="arrow-right"
						></v-icon>
					</span>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<style scoped>
	.arrow-right {
		border: 2px solid;
		border-radius: 100%;
	}

	.arrow-redirect {
		text-decoration: none;
	}
</style>
