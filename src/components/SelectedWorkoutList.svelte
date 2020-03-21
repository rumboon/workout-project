<script>
    import BodyWeightImage from "./svg/BodyWeightImage.svelte";
    import WeightImage from "./svg/WeightImage.svelte";
    import TimeUnderTensionImage from "./svg/TimeUnderTensionImage.svelte";
    import RepetitionImage from "./svg/RepetitionImage.svelte";

    export let items;

    const imageColor = "#fff";

    const getTimeFromSeconds = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time - minutes * 60;
      if (minutes && !seconds) {
        return `${minutes} minutes`;
      }

      if (!minutes && seconds) {
        return `${seconds} seconds`;
      }

      return `${minutes} minutes, ${seconds} seconds`;
    };
</script>

<header class="grid heading">
    <RepetitionImage color={imageColor} />
    <WeightImage color={imageColor} />
    <TimeUnderTensionImage color={imageColor} />
</header>
<ul>
    {#each items as item}
        {#if item.rested}
            <li class="rested">
                {getTimeFromSeconds(item.rested)}
            </li>
        {/if}
        <li class="grid" >
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
        grid-template-rows: 2fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        justify-items: center;

        height: 2rem;
        margin: 0.5em;
        padding: 0.5em;

        border-radius: 1rem;
    }

    .rested {
        margin: 1.25rem 0.5rem -0.5rem 0.5rem;
        padding: 0 0.75rem;

        /* background-color: #FFD9DD; */
        /* color: #8D5658; */
        background-color: bisque;

        border-radius: 1rem 1rem 0 0;
        font-size: 0.7rem;
        text-align: center;
    }

    .rested + .grid {
        border-radius: 0 0 1rem 1rem;
    }

</style>
