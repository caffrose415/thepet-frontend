import React from 'react';
import {CategoryP, ProductDetailContainer} from './detail.style';
import ProductSummaryContainer from './ProductSummaryContainer';
import Review from './Review';
import ProductIngredient from './ProductIngredient';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import axios from 'axios';

function ProductDetail() {
  const [ingredients, setIngredients] = useState([]);
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {

    const params = new URL(document.location.toString());
    const productId = params.pathname.split('/').at(-1);

    axios.get(`/api/product/${productId}`)
      .then((res) => {
        setIngredients(() => {
          return [...res.data.ingredients.split(',')];
        })
        setProductInfo(() => {
          return {...res.data};
        })
        console.log(res.data)
      })
  }, [])

  return (
    <ProductDetailContainer>
      <CategoryP>{"SHOPPING  >  FOOD  >  강아지"}</CategoryP>
      <ProductSummaryContainer productInfo={productInfo}></ProductSummaryContainer>
      <Review></Review>
      <ProductIngredient ingredients={ingredients}></ProductIngredient>
    </ProductDetailContainer>
  );
}

export default ProductDetail;
