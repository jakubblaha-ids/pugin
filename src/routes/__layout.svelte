<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import '../app.css';
</script>

<div class="grid place-items-center h-screen">
	<div class="h-[800px] w-[400px]  rounded-2xl ring-2 ring-gray-100 flex flex-col bg-[#1E1E1E]">
		<TopBanner />

		<div class="flex-grow overflow-y-scroll scrollbar-hide">
			<slot />
		</div>

		<!-- Navigation -->
		<div
			class="h-20 flex justify-around items-center rounded-2xl bg-[#ECECEC] flex-shrink-0 shadow"
		>
			<div class="h-10">
				<Avatar />
			</div>

			<div>
				<svg
					class="w-8 h-8"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/></svg
				>
			</div>

			<div>
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
			</div>
		</div>
	</div>
</div>
