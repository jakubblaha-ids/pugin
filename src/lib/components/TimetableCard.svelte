<script>
	const lessons = ['D', 'M', 'Čj', 'Zsv', 'B', 'Tv'];
</script>

<div class="font-semibold text-lg">Today's lessons</div>

<div class="flex space-x-2 mt-2 relative">
	{#each lessons as lesson}
		<div
			class="rounded-xl bg-[#C4C4C4] w-12 h-12 grid place-items-center font-semibold first:opacity-50"
		>
			{lesson}
		</div>
	{/each}

	<div class="bg-[#A1B7E2] w-1 h-16 rounded-full -top-2 left-10 absolute" />
</div>

<div class="font-semibold mt-4">
	The next lesson starts in <span class="text-[#5783D9]">4 minutes</span>.
</div>
