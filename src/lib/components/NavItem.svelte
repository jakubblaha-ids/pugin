<script>
	export let icon = '';
	export let text = 'No Text';
</script>

<div class="rounded-2xl bg-[#C4C4C4] font-mono px-6 py-6 font-semibold relative flex">
	<img src={icon} alt="" />

	<div class="flex-grow">
		{@html text}
	</div>

	<slot />
</div>
