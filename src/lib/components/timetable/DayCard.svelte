<script lang="ts">
    import Avatar from "../Avatar.svelte";

    export let predmety: any[];
    $: console.log(predmety);
</script>

<div class="bg-white rounded-xl px-2 py-3 flex flex-col gap-2">
    {#each predmety as predmet}
        <div class="bg-[#C4C4C4] p-4 rounded-xl flex flex-row items-center">
            <div class="font-bold text-sm w-24">{predmet?.time || "00:00"}</div>
            <div class="flex-1 px-2">{predmet?.name || "No name"}</div>
            <div class="font-bold">{predmet?.room || "Room"}</div>
        </div>
    {/each}
</div>
