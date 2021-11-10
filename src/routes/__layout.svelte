<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import NavItem from '$lib/components/NavItem.svelte';
	import '../app.css';

	const navItems = [
		{
			title: 'Timetable',
			href: '/coming-soon',
			icon: '/icons/calendar.svg'
		},
		{
			title: 'Courses',
			href: '/coming-soon',
			icon: '/icons/academic-cap.svg'
		},
		{
			title: 'Lunch',
			href: '/coming-soon',
			icon: '/icons/cake.svg'
		},
		{
			title: 'Find person',
			href: '/find-person',
			icon: '/icons/search.svg'
		},
		{
			title: 'Settings',
			href: '/coming-soon',
			icon: '/icons/cog.svg'
		}
	];

	let navCollapsed = true;
	$: navTranslateY = navCollapsed ? '80%' : '0%';

	const toggleNav = () => (navCollapsed = !navCollapsed);

	let innerHeight;
	let innerWidth;
	$: usingMoubajl = 1.5 * innerWidth < innerHeight;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="grid place-items-center h-full">
	<div
		class="{usingMoubajl
			? 'w-full h-full'
			: 'h-[800px] w-[400px] rounded-2xl'} ring-2 ring-gray-100 flex flex-col bg-[#1E1E1E] overflow-hidden relative"
		style="transform: scale({innerHeight < 800 && !usingMoubajl
			? `${innerHeight / 800}`
			: '1'}); transform-origin: top center;"
	>
		<slot />

		<!-- Navigation -->
		<div
			class="h-96 rounded-2xl bg-[#ECECEC] flex-shrink-0 shadow flex flex-col transition-transform duration-300 absolute bottom-0 w-full"
			style="transform: translateY({navTranslateY});"
		>
			<div class="h-20 flex justify-around items-center flex-shrink-0">
				<a class="h-10" href="/profile">
					<Avatar />
				</a>

				<a href="/home">
					<svg
						class="w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
						/></svg
					>
				</a>

				<button on:click={toggleNav}>
					<svg
						class="w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>

			<div class="overflow-y-scroll scrollbar-hide px-6 space-y-3 pb-6">
				{#each navItems as item}
					<div class={item.href === '/coming-soon' && 'opacity-50'}>
						<NavItem text={item.title} href={item.href} icon={item.icon} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
