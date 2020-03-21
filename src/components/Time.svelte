<script>
    import Select from "./Select.svelte";

    export let options;
    export let selected;
    export let onSelect;
    export let onAdd
</script>

<section>
    <Select
        name="Time"
        selected={selected}
        options={options}
        on:select={onSelect}
    />
    {#if !selected}
        <form on:submit|preventDefault={onAdd}>
            <input type="submit" value="+" />
        </form>
    {/if}
</section>
