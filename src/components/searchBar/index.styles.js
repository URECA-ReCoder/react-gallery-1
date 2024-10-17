import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  padding: 4px 8px;
  background: rgba(227, 227, 227, 0.373);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
`;

export const Input = styled.input`
  height: 24px;
  padding: 8px 4px;
  background: none;
  resize: none;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.5px;
  border: none;
  width: 100%;
`;

export const EraseButton = styled.button`
  border-radius: 50%;
  width: 18px;
  padding: 2px;
  background: #C2C4C5;
  color: #F3F5F7;
  font-size: 10px;
  font-weight: 300;
`;

export const EraseImg = styled.img`
  width: 8px;
  height: 8px;
`;

export const ExitButton = styled.button`
  font-size: 13px;
  font-weight: 400;
  width: 28px;

`;
