import create from 'zustand';

type State = {
  currentRound: () => number;
  rounds: Date[];
  goalRounds: number;
  increment: () => void;
  roundsRemaining: () => number;
};

export const useStore = create<State>((set, get) => ({
  goalRounds: 10,
  rounds: [],
  currentRound: () => {
    return get().rounds.length;
  },
  roundsRemaining: () => {
    return get().goalRounds - get().currentRound();
  },
  increment: () => set(state => ({ rounds: [...state.rounds, new Date()] })),
  setOptions: (options: Partial<State>) =>
    set(_state => ({
      goalRounds: options.goalRounds,
    })),
}));
