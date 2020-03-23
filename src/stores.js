import { writable } from "svelte/store";

const mockData = {
  "13-03-2020 11.00": [
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true, rested: 32 },
    { exercise: "squad", reps: 6, kg: 50, tut: 40, rested: 198 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true, rested: 110 },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true, rested: 120 },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
    { exercise: "squad", reps: 10, kg: 50, tut: 60, withBodyWeight: true },
    { exercise: "squad", reps: 8, kg: 50, tut: 55, withBodyWeight: true },
    { exercise: "squad", reps: 6, kg: 50, tut: 40 },
    { exercise: "squad", reps: 5, kg: 50, tut: 30, withBodyWeight: true },
  ],
  "14-03-2020 11.00": [
    { exercise: "deadlift", reps: 10, kg: 80, tut: 60 },
    { exercise: "deadlift", reps: 10, kg: 90, tut: 55 },
    { exercise: "deadlift", reps: 8, kg: 100, tut: 50 },
    { exercise: "deadlift", reps: 7, kg: 100, tut: 50 },
    { exercise: "deadlift", reps: 7, kg: 100, tut: 50 },
  ],
  "15-03-2020 11.00": [
    { exercise: "pullup", reps: 10, kg: 0, tut: 34, withBodyWeight: true },
    { exercise: "dips", reps: 10, kg: 10, tut: 40, withBodyWeight: true },
    { exercise: "pullup", reps: 8, kg: 10, tut: 30, withBodyWeight: true },
    { exercise: "dips", reps: 10, kg: 0, tut: 34, withBodyWeight: true },
    { exercise: "pullup", reps: 10, kg: 10, tut: 40, withBodyWeight: true },
    { exercise: "dips", reps: 8, kg: 10, tut: 30, withBodyWeight: true },
  ],
};

const STORE = "workouts";

function readStore () {
  // return mockData;
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
    add: (datetime, item) => updateStore(prevState => {
      prevState[datetime] = [
        ...prevState[datetime],
        item,
      ];

      return prevState;
    }),
    addTime: (time) => updateStore(prevState => {
      prevState[time] = [];
      return prevState;
    }),
  };
}

export const workouts = createWorkouts();
