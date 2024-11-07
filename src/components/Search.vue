<template>
	<div
		class="relative flex flex-nowrap rounded-2xl shadow h-6 items-center w-fit cursor-pointer ring-1 ring-slate-200 duration-200 has-[:focus]:bg-slate-100 dark:has-[:focus]:bg-slate-900 dark:ring-slate-900"
	>
		<input
			type="text"
			class="w-8 focus:w-48 duration-500 focus:outline-0 indent-2 dark:text-gray-400 rounded-l-2xl bg-inherit text-sm"
		/>
		<seach class="relative rounded-r-2xl" />
	</div>
</template>

<script setup lang="ts">
	import seach from './icons/search.vue';
	import { ref } from 'vue';
</script>

<style scoped></style>
