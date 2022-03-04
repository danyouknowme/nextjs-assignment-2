import React from 'react';
import styled from 'styled-components';
import { Variant } from '../types/product';

const ColorSelectorContainer = styled.div`
  display: flex;
`;

const ColorSelectorWrapper = styled.div<{ selected: boolean; }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => selected ? '#BEBEBE' : '#FFFFFF'};
  margin: 0 6px;
`;

const SelectorColor = styled.div<{ color: string; }>`
  margin: 2px;
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ color }) => color === "#FFFFFF" ? "#DEDEDE" : '#FFFFFF'};
`;

interface Props {
  variants: Variant[];
  selectedVariant: Variant;
  setSelectedVariant: (variant: Variant) => void;
}

const ColorSelector: React.FC<Props> = ({ variants, selectedVariant, setSelectedVariant }) => {
  return (
    <ColorSelectorContainer>
      {variants.map((variant, index) => (
        <ColorSelectorWrapper selected={variant.color === selectedVariant.color} key={index}>
          <SelectorColor color={variant.color} onClick={() => setSelectedVariant(variant)} />
        </ColorSelectorWrapper>
      ))}
    </ColorSelectorContainer>
  );
};

export default ColorSelector;