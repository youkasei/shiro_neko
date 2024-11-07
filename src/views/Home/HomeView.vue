<script setup lang="ts">
	import { onBeforeMount, ref } from 'vue';
	const sentence = ref({
		id: 8241,
		uuid: 'aa81b3b0-1dea-42fc-ad54-318f70050e05',
		hitokoto: '',
		type: 'd',
		from: '',
		from_who: null,
		creator: 'Recontre·N',
		creator_uid: 11615,
		reviewer: 1,
		commit_from: 'web',
		created_at: '1650353891',
		length: 10,
	});
	const getSentence = () => {
		// 参数说明：c(a:动画、b：漫画、c：游戏、d：小说、e：原创、f：来自网络、g：其他)
		fetch('https://v1.hitokoto.cn/?c=a')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				sentence.value = res;
				console.log(res);
			});
	};
	const hello = ref<String>('');
	onBeforeMount(getSentence);
</script>

<template>
	<div class="relative max-w-[1280px] mx-auto px-12 border-x">
		<div class="relative min-h-[880px]">
			<p class="bg-skyblue-200"></p>
			<div
				class="absolute bottom-12 text-base italic text-slate-400 dark:text-slate-400"
			>
				<p
					class="underline underline-offset-4 duration-1000 tracking-wide"
					:class="sentence.hitokoto ? '' : 'opacity-0 -translate-x-10'"
				>
					{{ sentence.hitokoto || '...' }}
				</p>
				<div
					class="text-sm indent-2 mt-1 duration-1000"
					:class="sentence.from ? '' : 'opacity-0 translate-x-10'"
				>
					-- << {{ sentence.from || '...' }} >>
				</div>
			</div>
		</div>
	</div>
</template>
