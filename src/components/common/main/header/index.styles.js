import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center; //수직
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  z-index: 2;
  position: absolute;
  background-color: white;
  top: 0;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
