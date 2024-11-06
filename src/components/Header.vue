<template>
	<header class="flex shadow-sm min-h-16 items-center px-12">
		<div
			class="avater w-12 h-12 rounded-full shadow mr-12 text-center leading-10"
		>
			头像
		</div>
		<nav class="flex justify-center text-slate-600 font-bold rounded-2xl">
			<RouterLink
				class="mr-2 hover:bg-slate-200 duration-200 px-4 py-1 rounded-2xl last:mr-0"
				v-for="(item, index) in routes"
				:key="index"
				:to="item.link"
				>{{ item.text }}</RouterLink
			>
		</nav>
		<DayChange class="float-right" />
	</header>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import DayChange from '@/components/DayChange.vue';

	const routes = ref([
		{
			link: '/',
			text: '首页',
		},
		{
			link: '/',
			text: '频道',
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
