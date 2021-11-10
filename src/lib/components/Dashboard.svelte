<script>
	import DashboardCard from './DashboardCard.svelte';
	import FeedbackCard from './FeedbackCard.svelte';
</script>

<div class="flex flex-col space-y-4">
	<slot />

	<DashboardCard>
		<FeedbackCard />
	</DashboardCard>
</div>
