<script>
	export let icon = '';
	export let text = 'No Text';
	export let href = '/';
</script>

<a
	class="rounded-2xl bg-[#C4C4C4] font-mono px-6 py-6 font-semibold relative flex space-x-4 items-center"
	{href}
>
	<img src={icon} alt="" class="h-5 w-5" />

	<div class="flex-grow">
		{@html text}
	</div>

	<slot />
</a>
