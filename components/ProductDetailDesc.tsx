import React from 'react';
import styled from 'styled-components';

const DetailDescContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 30px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  span {
    line-height: 30px;
  }
`;

const ProductDetailDesc: React.FC<{ description: string; }> = ({ description }) => {
  return (
    <DetailDescContainer>
      <h3>Description</h3>
      <span>{description}</span>
    </DetailDescContainer>
  );
};

export default ProductDetailDesc;
