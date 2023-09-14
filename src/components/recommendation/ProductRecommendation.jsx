import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import {
  RcContainer,
  RcMiniIcon,
  RcTitle,
  StyledSpanGreen,
} from "./index.style";
import {
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from "../product/index.style";
import { useNavigate } from "react-router-dom";
import { productSub, proteinCode, breedCode } from "../../commonCode.js";
import miniIconImg from "../../assets/recommendation/mini-text-icon-v2.png";
import ProductCard from "../product/ProductCard";
function ProductRecommendation({ type, petId }) {
  const [foodProductList, setFoodProductList] = useState([]);
  const [petInfo, setPetInfo] = useState({});
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Api.get(`/api/recommendation/${type}/${petId}`).then((res) => {
      setFoodProductList(res.data.products);
      setPetInfo(res.data.petInfo);

      if (type === "simple") {
        setTitle(
          <>
            <StyledSpanGreen>{productSub[petInfo.ageCode]}</StyledSpanGreen>
            이며{" "}
            <StyledSpanGreen>
              {proteinCode[petInfo.favoriteProteinCode]}
            </StyledSpanGreen>{" "}
            사료를 가장 좋아하는{" "}
            <StyledSpanGreen>{petInfo.name}</StyledSpanGreen>에게는 <br />
            이런 상품을 추천해요.
          </>
        );
      }

      if (type === "detail") {
        setTitle(
          <>
            <StyledSpanGreen>{petInfo.name}</StyledSpanGreen>와 비슷한 나이대의{" "}
            <StyledSpanGreen>{breedCode[petInfo.breedCode]}</StyledSpanGreen>
            들은
            <br />
            이런 상품들을 많이 구매했어요.
          </>
        );
      }
    });
  }, [type, petId, petInfo.ageCode, petInfo.favoriteProteinCode, petInfo.name]);

  return (
    <RcContainer>
      <RcMiniIcon src={miniIconImg} />
      <RcTitle>
        {title}
        <hr style={{ color: "lightgray" }} />
      </RcTitle>
      <ProductContainer>
        {foodProductList !== undefined &&
          foodProductList.map((product, idx) => (
            // <ProductCard
            //   key={idx}
            //   onClick={() => navigate(`/product/${product.id}`)}
            // >
            //   <ProductImg src={product.mainImgUrl} alt={product.name} />
            //   <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            //   <ProductSummary>{product.name}</ProductSummary>
            // </ProductCard>
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
      </ProductContainer>
    </RcContainer>
  );
}

export default ProductRecommendation;
