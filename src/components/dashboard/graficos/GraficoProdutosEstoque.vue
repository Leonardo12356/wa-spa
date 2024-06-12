<script setup>
	import { ref } from 'vue';
	import { Bar } from 'vue-chartjs';

	const options = ref({
		responsive: true,
		maintainAspectRatio: false,
	});

	const bar_indigo_color = ref('#7986CB');

	const data = ref({
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Estoque de produtos',
				backgroundColor: bar_indigo_color.value,
				data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
			},
		],
	});
</script>

<template>
	<v-container class="chart-container">
		<Bar :data="data" :options="options" />
	</v-container>
</template>

<style scoped>
	.chart-container {
		flex-grow: 1;
		min-height: 250px;
	}
</style>
