<script>
	import Avatar from '$lib/components/Avatar.svelte';

	import { searchStore } from '$lib/utils/stores';
</script>

<div class="w-48 h-48 mx-auto mt-16">
	<Avatar borderColor="#CDBE7C" borderWidth={6} />
</div>

<div class="bg-[#ECECEC] rounded-2xl py-4 mx-4 mt-6">
	<div class="text-center font-mono text-2xl font-semibold">{$searchStore.name}</div>
	<div class="text-center font-mono">{$searchStore.title}</div>

	<div class="font-mono mx-4 font-semibold">Rozvrh:</div>
	<div class="bg-[#C4C4C4] font-mono mx-4 px-6 py-4 rounded-lg mt-2">
		8:00 - 8:45 | Dějepis - 204
	</div>

	<!-- <div class="font-mono mx-4 font-semibold">Kabinet | Kmenová učebna:</div>
	<div class="bg-[#C4C4C4] font-mono mx-4 px-4 py-2 rounded-xl mt-2">
		8:00 - 8:45 | Dějepis - 204
	</div> -->

	<div class="px-4">
		<div class="w-full h-px bg-[#C4C4C4] mt-4" />
	</div>

	<div
		class="flex mx-4 items-center space-x-4 bg-[#5783D9] px-6 py-4 rounded-lg mt-4 justify-center"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
				clip-rule="evenodd"
			/>
		</svg>

		<div class="font-mono font-semibold">Poslat zprávu</div>
	</div>
</div>
