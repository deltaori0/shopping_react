import React from "react";

import * as S from "./styles";

interface CardProps {
  image?: string;
  name?: string;
  age?: string;
  type?: string;
}

const Card: React.FC<CardProps> = ({ image, name, age, type }) => {
  return (
    <S.Card>
      <S.CardContainer>
        <S.CardHeader>
          <S.CardHot>HOT</S.CardHot>
        </S.CardHeader>
        <S.CardImage src={image}></S.CardImage>
        <S.CardName>{name}</S.CardName>
        <S.CardAge>{age}</S.CardAge>
        <S.CardType>{type}</S.CardType>
        <S.ButtonContainer>
          <S.LinkButton>전체상품</S.LinkButton>
          <S.LinkButton>마이샵 +</S.LinkButton>
        </S.ButtonContainer>
      </S.CardContainer>
    </S.Card>
  );
};

export default Card;
