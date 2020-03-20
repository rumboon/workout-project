import { writable } from "svelte/store";

const mockData = {
  squad: {
    "13-03-2020 11.00": [
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true, rested: 32 },
      { reps: 6, kg: 50, tut: 40, rested: 198 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true, rested: 110 },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true, rested: 120 },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
      { reps: 10, kg: 50, tut: 60, withBodyWeight: true },
      { reps: 8, kg: 50, tut: 55, withBodyWeight: true },
      { reps: 6, kg: 50, tut: 40 },
      { reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    ],
  },
  deadlift: {
    "13-03-2020 11.00": [
      { reps: 10, kg: 80, tut: 60 },
      { reps: 10, kg: 90, tut: 55 },
      { reps: 8, kg: 100, tut: 50 },
      { reps: 7, kg: 100, tut: 50 },
      { reps: 7, kg: 100, tut: 50 },
    ],
  },
  pullup: {
    "13-03-2020 11.00": [
      { reps: 10, kg: 0, tut: 34, withBodyWeight: true },
      { reps: 10, kg: 10, tut: 40, withBodyWeight: true },
      { reps: 8, kg: 10, tut: 30, withBodyWeight: true },
    ],
  },
  dips: {
    "14-03-2020 12.15": [
      { reps: 10, kg: 0, tut: 34, withBodyWeight: true },
      { reps: 10, kg: 10, tut: 40, withBodyWeight: true },
      { reps: 8, kg: 10, tut: 30, withBodyWeight: true },
    ],
  },
};

function createWorkout () {
  const { subscribe, update } = writable(mockData);

  return {
    subscribe,
    add: (workout, datetime, item) => update(prevState => {
      prevState[workout][datetime] = [
        ...prevState[workout][datetime],
        item,
      ];
      return prevState;
    }),
  };
}

export const workout = createWorkout();
