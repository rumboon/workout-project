<script>
    import Overlay from "./Overlay.svelte";
    // TODO let empty export
    const placeholder = "foo";

    let showOverlay = false;

    const toggleOverlay = () => {
      showOverlay = !showOverlay;
    };

</script>

<input {placeholder} on:focus={toggleOverlay} />
{#if showOverlay}
    <Overlay>
        <form on:submit|preventDefault on:reset={toggleOverlay}>
            <input type="text" autofocus />
            <input type="reset" value="cancel" />
        </form>
    </Overlay>
{/if}

<style>
    .overlay {
        position: absolute;
        top: 100vh;

        width: 80vw;
        height: 80vh;

        background-color: #ff00ff;
        opacity: 0.5;
    }
</style>
