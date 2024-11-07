<script setup lang="ts">
	import { onBeforeMount, ref } from 'vue';


	const info = ref({
		text1:`Hi, I'm ${'Test'}, `,
		text2:`a ${'Web Developer,'}`,
		text3:'there be my personal site.'
	})
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
			}).catch(err=>{
				sentence.value.hitokoto ='人的记忆本来就是暧昧的，不值得信任。' 
				sentence.value.from = '叛逆的鲁鲁修R2'
			})
	};
	onBeforeMount(getSentence);

	const animeDuration = 500
	const animeStr = `*:duration-[${animeDuration}ms]`
</script>

<template>
	<div class="relative max-w-[1280px] mx-auto px-12">
		<div class="relative min-h-[760px] ">
			<div class="relative  pt-44 text-2xl text-slate-700 *:w-fit">
				<p  class="flex *:relative  *:block *:min-w-1" :class="sentence.hitokoto?animeStr:'*:-translate-y-4 *:opacity-0'">
				<span :style="{transitionDelay:`${index*50}ms`}" v-for="(word, index) in info.text1" :key="index">
					{{word}}
				</span>
			</p>
			<p  class=" *:relative  *:inline-block *:min-w-1 " :class="sentence.hitokoto?animeStr:' *:-translate-y-4 *:opacity-0'">
				<span :style="{transitionDelay:`${ (info.text1.length+index)*50}ms`}" v-for="(word, index) in info.text2" :key="index">
					{{word}}
				</span>
			</p>
			<p class=" *:relative  *:inline-block  *:min-w-1 " :class="sentence.hitokoto?animeStr:'*:-translate-y-4 *:opacity-0'">
				<span :style="{transitionDelay:`${ (info.text1.length+info.text2.length+index)*50}ms`}" v-for="(word, index) in info.text3" :key="index">
					{{word}}
				</span>
			</p>
			</div>
			<div
				class="absolute bottom-12 text-base italic text-slate-400 dark:text-slate-400"
			>
				<p
					class="underline underline-offset-4 duration-1000 tracking-wide "
					:class="sentence.hitokoto ? '' : 'opacity-0 -translate-x-10'"
					:style="{transitionDelay:`${animeDuration*3}ms`}"
				>
					{{ sentence.hitokoto || '...' }}
				</p>
				<div
					class="text-sm indent-2 mt-1 duration-1000 "
					:class="sentence.from ? '' : 'opacity-0 translate-x-10'"
					:style="{transitionDelay:`${animeDuration*3+1000}ms`}"
				>
					-- << {{ sentence.from || '...' }} >>
				</div>
			</div>
		</div>
		<div class="flex items-center w-full justify-center">
		
<svg  class="animate-bounce w-6 h-6 size-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

		</div>
	</div>
</template>
