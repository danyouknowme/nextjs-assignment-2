import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ColorSelector, LikeButton } from '../components';
import { Variant, ProductProps } from '../types/product';

const ProductCardContainer = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.002);
  }
`;

const ProductHeader = styled.div`
  width: 100%;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const ProductType = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #BEBEBE;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
`;

const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #6BBBFF;
`;

const ProductFirstPrice = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #FE6969;
  text-decoration: line-through;
`;

const ProductPriceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);
  const [liked, setLiked] = useState<boolean>(false);

  const usageVariants = [...new Map(product.variants.map(item => [item['color'], item])).values()];

  return (
    <ProductCardContainer>
      <ProductHeader>
        <ProductName>{product.name}</ProductName>
        <ProductType>{product.brand}</ProductType>
      </ProductHeader>
      <ProductImageContainer>
        <Image alt='' src={selectedVariant.imageUrl} layout={'fill'} objectFit={'cover'} />
      </ProductImageContainer>
      <ColorSelector variants={usageVariants} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} />
      <ProductFooter>
        <ProductPriceContainer>
          <ProductPrice>${(selectedVariant.price - selectedVariant.discount).toFixed(2)}</ProductPrice>
          {selectedVariant.discount === 0 && (
            <ProductFirstPrice>${selectedVariant.price}</ProductFirstPrice>
          )}
        </ProductPriceContainer>
        <LikeButton liked={liked} setLiked={setLiked} />
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
