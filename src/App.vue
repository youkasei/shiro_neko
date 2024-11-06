<script setup lang="ts">
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<Header />
	<main class="mx-auto min-h-[800px] max-w-[1280px] border-x">
		<RouterView />
	</main>
	<Footer />
</template>

<style scoped></style>
