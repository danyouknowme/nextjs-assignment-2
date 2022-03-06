import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import { Product } from '../../types/product';
import ProductDetailDesc from '../../components/ProductDetailDesc';
import { ProductPageContainer, ProductMain } from '../../styles/ProductDetail';
import ProductDetailCard from '../../components/ProductDetailCard';

const ProductDetail: React.FC<{ product: Product; }> = ({ product }) => {
  return (
    <ProductPageContainer>
      <ProductMain>
        <ProductDetailCard product={product} />
        <ProductDetailDesc description={product.description} />
      </ProductMain>
    </ProductPageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`https://asia-southeast1-muze-academy.cloudfunctions.net/products/${context.query.id}`);
  return {
    props: { product: res.data }
  };
};

export default ProductDetail;
