<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import ProfileItem from '$lib/components/ProfileItem.svelte';
</script>

<div class="w-48 h-48 mx-auto mt-16">
	<Avatar borderColor="#CDBE7C" borderWidth={6} />
</div>

<div class="font-semibold text-white text-center mt-4 text-xl">Blakub Jáha</div>
<div class="text-white text-center text-lg">6.F</div>

<div class="px-4 mt-4 space-y-3">
	<ProfileItem text="99+ new notifications" showDot={true} />
	<ProfileItem text="My absence" showDot={false} />
	<ProfileItem text="My grades" showDot={true} />
	<ProfileItem text="Log out" showDot={false} />
</div>
