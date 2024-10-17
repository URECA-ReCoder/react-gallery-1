import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  height: 64px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  border-top: 1px solid #e0e0e0;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 2;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 8px;
  cursor: pointer;
`;
