<script>
    let innerHeight;
    let innerWidth;
    $: usingMoubajl = innerWidth < 1.5 * innerHeight;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="h-20 rounded-br-3xl {!usingMoubajl && 'rounded-t-2xl'} bg-[#ECECEC] px-6 py-4">
    <div class="text-[#5783D9] font-mono font-semibold">Next Up</div>

    <div class="flex font-semibold space-x-4">
        <div>Matematika</div>
        <div>102</div>
        <div>
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                /></svg
            >
        </div>
        <div>Kvadratické funkce</div>
    </div>
</div>
