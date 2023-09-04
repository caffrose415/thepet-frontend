import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductCard = styled.div`
  width: 300px;
  height: 400px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-left: 2%;
  margin-bottom: 2%;

  padding: 0;
  margin: 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 80%;
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
  height: 10%;
  margin: 0;

  display: flex;
  align-items: center;
`;
export const ProductSummary = styled.p`
  font-size: 15px;
  height: 10%;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const PageNationContainer = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid blue;

  display: flex;
  justify-content: center;
`;

export const PageNumber = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.flag ? 'gray' : 'white')};
`;

export const CategoryP = styled.p`
  width: 100%;
  height: auto;

  font-size: 17px;
`;

export const FilterCategoryContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const FilterCategoryRow = styled.div`
  width: 100%;
  height: auto;

  margin-top: 2vh;
  margin-bottom: 2vh;

  display: flex;
`;

export const FilterCategoryTitle = styled.div`
  width: 20%;
  height: auto;

  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 1vh;
`;

export const CategoryElementContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  flex-wrap: wrap;
`;

export const CategoryElement = styled.div`
  width: 170px;
  height: auto;

  font-size: 20px;
  display: flex;
  align-items: center;

  margin: 1vh;

  color: ${(props) => (props.isChecked ? '#2F9861' : 'black')};

  cursor: pointer;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: 50px;

  margin: 3vh 0 3vh 0;

  display: flex;
  justify-content: space-between;
`;

export const MiddleCategoryContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
`;

export const MiddleCategoryElement = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: 1px solid lightgray;
`;

export const MiddlePagenationContainer = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddlePageContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: end;
`;

export const PageArrow = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  cursor: pointer;

  border: 1px solid lightgray;
`;

export const PageState = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  border: 1px solid lightgray;
`;
