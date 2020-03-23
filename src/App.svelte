<script>
    import { workouts } from "./stores";
    import Time from "./components/Time.svelte";
    import Form from "./components/Form.svelte";
    import SelectedWorkoutList from "./components/SelectedWorkoutList.svelte";

    let selectedTime = "";

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
      workouts.addTime(dateTime);
    };

    const handleAdd = (e) => {
      const { item } = e.detail;
      workouts.add(selectedTime, item);
    };
</script>

<main>
    <div class="section">
        <Time
            options={Object.keys($workouts)}
            selected={selectedTime}
            onSelect={handleTimeSelection}
            onAdd={handleTimeAdd}
        />
    </div>
    {#if selectedTime}
        <Form on:add={handleAdd} />
        <SelectedWorkoutList items={$workouts[selectedTime]} />
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
