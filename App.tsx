import React from 'react';
import { Pressable } from 'react-native';
//@ts-ignore
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  font-size: 212px;
`;

export default function App() {
  return (
    <Wrapper>
      <Pressable onPressOut={}>
        <Number>0</Number>
      </Pressable>
    </Wrapper>
  );
}
