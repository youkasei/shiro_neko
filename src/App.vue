<script setup lang="ts">
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<div class="relative bg-white dark:bg-slate-800">
		<Header class="fixed top-0 w-full z-20 bg-inherit" />
		<main class="mx-auto min-h-[800px] mt-14">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
