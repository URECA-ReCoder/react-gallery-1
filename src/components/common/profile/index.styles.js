import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
`;