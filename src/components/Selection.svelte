<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let name;
    export let selected;
    export let options;

    export const handleSelect = (e) => {
      const { value } = e.target;
      if (!value) return;

      dispatch('select', { value });
    }
</script>

<div>
    <label>{name}</label>
    <select value={selected} on:change={handleSelect}>
        <option value="">-</option>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
</div>
