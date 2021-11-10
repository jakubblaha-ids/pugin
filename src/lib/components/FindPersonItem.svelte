<script>
	import Avatar from './Avatar.svelte';

	export let icon = '';
	export let name = '';
	export let title = '';
	export let avatar = '';
</script>

<button
	class="h-16 bg-[#ECECEC] rounded-full px-2 py-2 flex space-x-4 items-center w-full"
	on:click
>
	<Avatar borderColor="#CDBE7C" borderWidth={3} src={avatar} />

	<div class="flex-grow text-left">
		<div class="font-semibold font-mono">{name}</div>
		<div class="font-mono -mt-1">{title}</div>
	</div>

	{#if icon}
		<img src={icon} alt="" class="h-6 pr-6" />
	{/if}
</button>
