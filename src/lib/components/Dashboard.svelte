<script>
	import DashboardCard from './DashboardCard.svelte';
	import FeedbackCard from './FeedbackCard.svelte';
	import LastGradesCard from './LastGradesCard.svelte';
	import TimetableCard from './TimetableCard.svelte';
</script>

<div class="flex flex-col space-y-4">
	<slot />

	<DashboardCard>
		<FeedbackCard />
	</DashboardCard>

	<DashboardCard>
		<TimetableCard />
	</DashboardCard>

	<DashboardCard>
		<LastGradesCard />
	</DashboardCard>
</div>
