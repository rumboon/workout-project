<script>
    import { workouts } from "../stores";
    import SearchInput from "./SearchInput.svelte";
    import Exercise from "./Exercise.svelte";
    import Time from "./Time.svelte";
    import Form from "./Form.svelte";
    import SelectedWorkoutList from "./SelectedWorkoutList.svelte";


    let selectedTime = "";
    let selectedExercise = "";

    const handleExerciseSelection = (e) => {
      const { value } = e.detail;
      selectedExercise = value;
      selectedTime = "";
    };

    const handleExerciseAdd = (e) => {
      const { value } = e.target.exercise;
      if (!value) return;

      workouts.addExercise(value);
    };

    const handleTimeSelection = (e) => {
      const { value } = e.detail;
      selectedTime = value;
    };

    const handleTimeAdd = () => {
      const now = new Date();

      const year = now.getFullYear();
      const month = `0${now.getMonth()}`.slice(-2);
      const day = `0${now.getDate()}`.slice(-2);
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);

      const dateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
      workouts.addTime(selectedExercise, dateTime);
    };

    const handleAdd = (e) => {
      const { item } = e.detail;
      workouts.add(selectedExercise, selectedTime, item);
    };
</script>

<main>
    <SearchInput />
    <div class="section">
        <Exercise
            options={Object.keys($workouts)}
            selected={selectedExercise}
            onSelect={handleExerciseSelection}
            onAdd={handleExerciseAdd}
        />
        {#if selectedExercise}
            <Time
                options={Object.keys($workouts[selectedExercise])}
                selected={selectedTime}
                onSelect={handleTimeSelection}
                onAdd={handleTimeAdd}
            />
        {/if}
        </div>
    {#if selectedExercise && selectedTime}
        <Form on:add={handleAdd} />
        <SelectedWorkoutList items={$workouts[selectedExercise][selectedTime]} />
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
