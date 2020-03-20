<script>
    import { workout } from "../stores";
    import Select from "./Select.svelte";
    import Form from "./Form.svelte";
    import SelectedWorkoutList from "./SelectedWorkoutList.svelte";

    // TODO set these values back to empty
    let selectedWorkout = "squad";
    let selectedTime = "13-03-2020 11.00";

    const handleWorkoutSelection = (e) => {
      const { value } = e.detail;
      selectedWorkout = value;
      selectedTime = "";
    };

    const handleTimeSelection = (e) => {
      const { value } = e.detail;
      selectedTime = value;
    };

    const handleAdd = (e) => {
      const { item } = e.detail;
      workout.add(selectedWorkout, selectedTime, item);
    };
</script>

<main>
    <div class="section">
        <Select
            name="Workout"
            selected={selectedWorkout}
            options={Object.keys($workout)}
            on:select={handleWorkoutSelection}
        />
        {#if selectedWorkout}
            <Select
                name="Time"
                selected={selectedTime}
                options={Object.keys($workout[selectedWorkout])}
                on:select={handleTimeSelection}

                />
            {/if}
        </div>
    {#if selectedWorkout && selectedTime}
        <Form on:add={handleAdd} />
        <SelectedWorkoutList items={$workout[selectedWorkout][selectedTime]} />
    {/if}
</main>

<style>
    :root {
        --color-red: #f45a69;
        --color-green: #426d53;
    }

    :global(html) {
        box-sizing: border-box;

        font-size: 20px;
    }
    :global(*, *:before, *:after) {
        box-sizing: inherit;
    }

    .section {
        display: flex;
        justify-content: space-between;
    }
</style>
