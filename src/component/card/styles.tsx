import styled from "styled-components/macro";

export const Card = styled.div`
  width: 230px;
  height: 300px;
  background-color: pink;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid black;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 40px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

export const CardImage = styled.img`
  width: 40%;
  height: 90px;

  border-radius: 120px;

  object-fit: cover;
`;

export const CardHot = styled.div`
  font-size: 12px;
  color: #73dff2;
`;

export const CardName = styled.div`
  font-weight: bolder;
  font-size: 15px;
  margin: 0px 17.25px;
  padding: 19px 0px 15px;
`;

export const CardAge = styled.div`
  font-weight: bolder;
  font-size: 13px;
  padding: 1px 0px;

  color: gray;
`;

export const CardType = styled.div`
  font-weight: bolder;
  font-size: 13px;
  padding: 1px 0px;
  margin-bottom: 60px;
  color: gray;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;

  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkButton = styled.div`
  width: 50%;
  color: gray;
  text-align: center;

  font-size: 11px;
  cursor: pointer;
`;

export const CardMeta = styled.div``;
