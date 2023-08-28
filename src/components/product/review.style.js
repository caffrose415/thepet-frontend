import styled from 'styled-components';

export const ReviewContainer = styled.div`
  border: 1px solid black;
  height: 300px;
`;

export const ReviewBanner = styled.div`
  display: flex;
`;

export const ReviewCardList = styled.div`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ReviewCard = styled.div`
  border: 1px solid gray;
  border-top-left-radius: 7%;
  border-top-right-radius: 7%;
  width: 150px;
  height: 220px;
  margin-left: 2%;
  margin-bottom: 1%;
`;

export const ReviewImg = styled.img`
  width: 100%;
  height: 140px;
`;

export const ReviewTitle = styled.p`
  width: 100%;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
  padding: 0;
`;

export const ReviewContent = styled.p`
  width: 150px;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
  padding: 0;
`;

export const ReviewRate = styled.p`
  width: 150px;
  height: 30px;
`;
