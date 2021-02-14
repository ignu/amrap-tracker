import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Provider, atom, useAtom } from 'jotai';
import create from 'zustand';

export const countAtom = atom(0);
export const roundsAtom = atom(9);
export const roundsRemainingAtom = atom(get => get(roundsAtom) - get(countAtom));

export const settingsAtom = atom({
  goal: 20,
  minutes: 20,
});

type State = {
  currentRound: number;
  goalRounds: number;
  increment: () => void;
  roundsRemaining: () => number;
};

export const useStore = create<State>((set, get) => ({
  currentRound: 0,
  goalRounds: 10,
  roundsRemaining: () => {
    return get().goalRounds - get().currentRound;
  },
  increment: () => set(state => ({ currentRound: state.currentRound + 1 })),
  setOptions: (options: Partial<State>) =>
    set(_state => ({
      goalRounds: options.goalRounds,
    })),
}));
