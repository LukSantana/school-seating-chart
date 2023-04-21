import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const InputLabel = styled.label`
	font-family: "Inter";
	font-size: 18px;
`;

export const Input = styled.input`
	padding: 10px;
	font-size: 14px;
  border: 2px solid #A6A6A6;
  border-radius: 6px;

  :focus{
    border: 2px solid #A6A6A6;
  }
`;
