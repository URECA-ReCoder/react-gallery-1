import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 7px 0px 0px 4px;
`;

export const TitleCreator = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const Screenshot = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px 12px;
`;

export const Button = styled.button`
  size: 28px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 12px;
`;

export const DescriptionCreator = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
`;



