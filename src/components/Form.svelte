<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const handleAdd = (e) => {
      const { reps, kg, tut, rested, withBodyWeight } = e.target;

      dispatch("add", {
        item: {
          reps: reps.value,
          kg: kg.value,
          tut: tut.value,
          rested: rested.value,
          withBodyWeight: withBodyWeight.checked,
        },
      });

      e.target.reset();
    };
</script>

<form on:submit|preventDefault={handleAdd}>
    <div class="input-section">
        <div class="full-width">
            <label for="reps">Reps</label>
            <input id="reps" class="full-width" type="number" required />
        </div>
        <div class="full-width">
            <label for="kg">KG</label>
            <input id="kg" class="full-width" type="number" required />
        </div>
        <div class="full-width">
            <label for="tut">TUT</label>
            <input id="tut" class="full-width" type="number" required />
        </div>
        <div class="full-width">
            <label for="rested">Rested</label>
            <input id="rested" class="full-width" type="number" />
        </div>
    </div>
    <label for="withBodyWeight">
        Body Weight
        <input id="withBodyWeight" type="checkbox" />
    </label>
    <input type="submit" value="+" />
</form>

<style>
    label {
        color: var(--color-green);
    }

    input[type="number"] {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--color-green);
    }

    .input-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .full-width {
        width: 100%;
    }
</style>
