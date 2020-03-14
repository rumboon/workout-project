<script>
    import BodyWeightImage from './BodyWeightImage.svelte'

    export let items;
</script>

<ul>
    <header class="grid heading">
        <div>reps</div>
        <div>kg</div>
        <div>tut</div>
    </header>
    {#each items as item}
        <li class="grid">
            <div>{item.reps}</div>
            <div>{item.kg}</div>
            <div>{item.tut}</div>
            {#if item.withBodyWeight}
                <div>
                    <BodyWeightImage />
                </div>
            {/if}
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        background-color: #ECF2C9;
        box-shadow: 2px 2px 5px 2px rgba(166, 217, 166, 0.50);
        border: 1px solid rgba(100, 100, 100, 0.25);
    }

    .heading {
        position: sticky;
        top: 0;
        background-color: rgba(100, 100, 100, 0.25);
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        margin: 1em 0.5em;
        padding: 0.25em;
    }

</style>
