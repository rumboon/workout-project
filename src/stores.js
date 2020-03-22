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

const STORE = "workouts";

function readStore () {
  return mockData;
  return JSON.parse(localStorage.getItem(STORE) || "{}");
}

function saveStore (value) {
  localStorage.setItem(STORE, JSON.stringify(value));
}

function createWorkouts () {
  const { subscribe, update } = writable(readStore());

  // Updates the svelte store and localStorage
  const updateStore = (callback) => update(prevState => {
    const state = callback(prevState);
    saveStore(state);
    return state;
  });

  return {
    subscribe,
    add: (exercise, datetime, item) => updateStore(prevState => {
      prevState[exercise][datetime] = [
        ...prevState[exercise][datetime],
        item,
      ];

      return prevState;
    }),
    addExercise: (exercise) => updateStore(prevState => {
      prevState[exercise] = {};
      return prevState;
    }),
    addTime: (exercise, time) => updateStore(prevState => {
      prevState[exercise][time] = [];
      return prevState;
    }),
  };
}

export const workouts = createWorkouts();
