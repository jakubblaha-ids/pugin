<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import ProfileItem from '$lib/components/ProfileItem.svelte';
</script>

<div class="w-48 h-48 mx-auto mt-16">
	<Avatar borderColor="#CDBE7C" borderWidth={6} />
</div>

<div class="font-semibold text-white text-center mt-4 text-xl">Blakub Jáha</div>
<div class="text-white text-center text-lg">6.F</div>

<div class="px-4 mt-4 space-y-3 mb-4">
	<ProfileItem text="<span class='text-[#5783D9]'>99+</span> new notifications" showDot={true} />
	<ProfileItem text="My absence" showDot={false} />
	<ProfileItem text="My grades" showDot={true} />
	<ProfileItem text="Log out" showDot={false}>
		<svg width="25" height="22" viewBox="0 0 25 22" fill="none" class="mr-1">
			<path
				d="M13.7778 16V17.25C13.7778 18.2446 13.3739 19.1984 12.655 19.9017C11.9361 20.6049 10.9611 21 9.94444 21H4.83333C3.81667 21 2.84165 20.6049 2.12276 19.9017C1.40387 19.1984 1 18.2446 1 17.25V4.75C1 3.75544 1.40387 2.80161 2.12276 2.09835C2.84165 1.39509 3.81667 1 4.83333 1H9.94444C10.9611 1 11.9361 1.39509 12.655 2.09835C13.3739 2.80161 13.7778 3.75544 13.7778 4.75V6M18.8889 16L24 11L18.8889 16ZM24 11L18.8889 6L24 11ZM24 11H6.11111H24Z"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</ProfileItem>
</div>
