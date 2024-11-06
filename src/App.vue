<script setup lang="ts">
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<div class="bg-white dark:bg-slate-800">
			<Header />
		<main class="mx-auto min-h-[800px]">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
