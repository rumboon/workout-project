<script>
    import { workout } from '../stores';
    import Selection from './Selection.svelte';
    import AddWorkout from './AddWorkout.svelte';
    import CurrentWorkoutList from './CurrentWorkoutList.svelte';

    let selectedWorkout = "squad";
    let selectedTime = "13-03-2020 11.00";

    const handleWorkoutSelection = (e) => {
      const { value } = e.detail;
      selectedWorkout = value;
      selectedTime = "";
    }

    const handleTimeSelection = (e) => {
      const { value } = e.detail;
      selectedTime = value;
    }

    const handleAdd = (e) => {
      const { item } = e.detail;
      workout.add(selectedWorkout, selectedTime, item);
    }
</script>

<main>
    <div class="section">
        <Selection
            name="Workout"
            selected={selectedWorkout}
            options={Object.keys($workout)}
            on:select={handleWorkoutSelection}
            />
        {#if selectedWorkout}
            <Selection
                name="Time"
                selected={selectedTime}
                options={Object.keys($workout[selectedWorkout])}
                on:select={handleTimeSelection}
                />
            {/if}
        </div>
    {#if selectedWorkout && selectedTime}
        <AddWorkout on:add={handleAdd} />
        <CurrentWorkoutList items={$workout[selectedWorkout][selectedTime]} />
    {/if}
</main>

<style>
    :global(html) {
        box-sizing: border-box;

        font-size: 14px;
    }
    :global(*, *:before, *:after) {
        box-sizing: inherit;
    }

    .section {
        display: flex;
        justify-content: space-between;
    }
</style>
