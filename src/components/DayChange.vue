<template>
	<div
		class="flex flex-nowrap min-h-8 w-fit rounded-2xl shadow ring-1 ring-slate-200 px-2 py-1 justify-center items-center cursor-pointer dark:ring-slate-900"
	>
		<sun class="w-6 h-6 mr-4" :is-active="theme==='light'" @click="dayChange('light')" />
		<moon class="w-6 h-6" :is-active="theme==='dark'" @click="dayChange('dark')" />
	</div>
</template>

<script setup lang="ts">
	import sun from './icons/sun.vue';
	import moon from './icons/moon.vue';
	import { ref } from 'vue';
	import { storeToRefs } from 'pinia';

	import { useAppStore } from '@/stores/app'
	import { type Theme } from '@/types/global';

	const appStore = useAppStore()
	const { theme } = storeToRefs(appStore)

	function dayChange(type: Theme) {
		appStore.changeTheme(type)
	}
</script>

<style scoped></style>
