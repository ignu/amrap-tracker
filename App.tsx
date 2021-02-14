import React, { useState } from 'react';
import { Pressable } from 'react-native';
//@ts-ignore
import styled from 'styled-components/native';
import { useStore } from './src/store';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  font-size: 212px;
`;

function Counter() {
  const defaultColor = '#000';
  const store = useStore();
  const [color, setColor] = useState(defaultColor);
  const increment = () => {
    setColor(defaultColor);
    store.increment();
  };
  const fadeNumber = () => {
    setColor('#aaa');
  };
  return (
    <Wrapper>
      <Pressable hitSlop={20} onPressIn={fadeNumber} onPressOut={increment}>
        <Number style={{ color }}>{store.currentRound}</Number>
      </Pressable>
      <Number>{store.roundsRemaining()}</Number>
    </Wrapper>
  );
}
export default function App() {
  return <Counter></Counter>;
}
