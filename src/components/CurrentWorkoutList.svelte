<script>
    import BodyWeightImage from './svg/BodyWeightImage.svelte'
    import WeightImage from './svg/WeightImage.svelte';
    import TimeUnderTensionImage from './svg/TimeUnderTensionImage.svelte';
    import RepetitionImage from './svg/RepetitionImage.svelte';

    export let items;

    const imageColor = "#fff";
</script>

<header class="grid heading">
    <RepetitionImage color={imageColor} />
    <WeightImage color={imageColor} />
    <TimeUnderTensionImage color={imageColor} />
</header>
<ul>
    {#each items as item}
        <li class="grid">
            <div>{item.reps}</div>
            <div>{item.kg}</div>
            <div>{item.tut}</div>
            {#if item.withBodyWeight}
                <div>
                    <BodyWeightImage color="#426d53" />
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

    /*
         color: #7da38d;  
#426d53
*/
    li {
        background-color: #F7F9F7;
        color: var(--color-green);
        /* box-shadow: 2px 2px 5px 2px rgba(166, 217, 166, 0.50); */
        /* border: 1px solid rgba(100, 100, 100, 0.25); */
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.50); */
        border-radius: 1rem;
    }

    .heading {
        position: sticky;
        top: 0;
        background-color: var(--color-green);
        color: #F7F9F7;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        justify-items: center;

        margin: 0.5em;
        padding: 0.5em;
    }

</style>
