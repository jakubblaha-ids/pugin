<script lang="ts">
    import DayCard from "$lib/components/timetable/DayCard.svelte";

    import { rozvrh } from "$lib/ts/timetable";

    const dny = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];
</script>

<div class="flex flex-col w-full gap-4 px-4 font-mono py-4">
    {#each rozvrh as day, i}
        <div class="capitalize text-white font-3xl">{dny[i]}</div>
        <DayCard predmety={day} />
    {/each}
</div>
