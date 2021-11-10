<script>
	export let text = 'No Text';
	export let showDot = false;
</script>

<div class="rounded-2xl bg-[#ECECEC] font-mono px-6 py-6 font-semibold relative">
	{text}

	{#if showDot}
		<div class="h-2 w-2 bg-[#5783D9] rounded-full absolute right-10 top-0 bottom-0 my-auto" />
	{/if}
</div>
