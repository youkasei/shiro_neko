<template>
	<div
		class="flex flex-nowrap min-h-8 w-fit rounded-2xl shadow ring-1 ring-slate-200 px-2 py-1 justify-center items-center cursor-pointer"
	>
		<sun class="w-6 h-6 mr-4" :is-active="active === 0" @click="dayChange(0)" />
		<moon class="w-6 h-6" :is-active="active === 1" @click="dayChange(1)" />
	</div>
</template>

<script setup lang="ts">
	import sun from './icons/sun.vue';
	import moon from './icons/moon.vue';
	import { ref } from 'vue';
	const active = ref<Number>(0);

	function dayChange(type: Number) {
		active.value = type;
	}
</script>

<style scoped></style>
