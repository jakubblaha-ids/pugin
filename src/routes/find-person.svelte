<script>
	import FindPersonItem from '$lib/components/FindPersonItem.svelte';

	const people = [
		{
			name: 'Lucie Drimlová',
			title: 'učitelka',
			icon: '/icons/academic-cap.blue.svg'
		},
		{
			name: 'Radka Kočí Voznicová',
			title: 'učitelka',
			icon: '/icons/academic-cap.blue.svg'
		},
		{
			name: 'Jakub Bláha',
			title: 'žák, 6.F'
		},
		{
			name: 'Tomáš Hobza',
			title: 'žák, 6.F'
		}
	];

	const filterPeople = (str) => {
		return people.filter((person) => {
			return person.name.toLowerCase().includes(str.toLowerCase());
		});
	};

	let filterString = '';
</script>

<div class="px-6">
	<div class="border-b h-12 border-white flex space-x-2 items-center mt-4 pt-6 pb-7 px-2">
		<svg class="h-6 w-8" viewBox="0 0 20 20" fill="white">
			<path
				fill-rule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clip-rule="evenodd"
			/>
		</svg>

		<input
			type="text"
			class="bg-transparent w-full text-white font-mono placeholder-white focus:outline-none focus:placeholder-opacity-50"
			placeholder="Zadejte jméno uživatele..."
			bind:value={filterString}
		/>
	</div>

	<div class="mt-4 space-y-3">
		{#each filterPeople(filterString) as person}
			<FindPersonItem icon={person.icon} name={person.name} title={person.title} />
		{/each}
	</div>
</div>
