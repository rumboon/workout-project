<script>
    import { fade, fly } from "svelte/transition";
</script>

<section class="overlay" in:fly={{ y: 200, duration: 600 }} out:fly={{ y: 200, duration: 300 }}>
    <slot></slot>
</section>

<style>
    .overlay {
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: #ff00ff;
    }
</style>
