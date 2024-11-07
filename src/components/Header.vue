<template>
	<header class="flex shadow-sm h-14 items-center px-12 dark:shadow-stone-900">
		<div
			class="avater w-12 h-12 rounded-full shadow mr-12 text-center leading-10"
		>
			头像
		</div>
		<nav class="flex justify-center text-slate-600 font-bold rounded-2xl">
			<RouterLink
				class="mr-2 hover:bg-slate-200 duration-200 px-4 py-1 rounded-2xl last:mr-0 dark:hover:bg-slate-900"
				v-for="(item, index) in routes"
				:key="index"
				:to="item.link"
				>{{ item.text }}</RouterLink
			>
		</nav>
		<Search class=" ml-48" />
		<DayChange class="absolute right-12" />
	</header>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import DayChange from '@/components/DayChange.vue';
	import Search from './Search.vue';
	const routes = ref([
		{
			link: '/',
			text: '首页',
		},
		{
			link: '/docs',
			text: '文档',
		},
		{
			link: '/',
			text: '随记',
		},
		{
			link: '/',
			text: '日常',
		},
		{
			link: '/about',
			text: '关于',
		},
	]);
</script>

<style scoped></style>
