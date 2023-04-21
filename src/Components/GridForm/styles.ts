import styled from "styled-components";

export const GridFormContainer = styled.div`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
	rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	width: 50%;
	padding: 1.5rem;
	border-radius: 8px;
	box-sizing: border-box;
`;

export const FormContainer = styled.form`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const SubmitButton = styled.button`
margin-top: 1.2rem;
padding: 0.7rem 2rem;
font-size: 14px;
font-family: 'Inter';
font-weight: 600;
background-color: #2563eb;
color: #fff;
border: none;
border-radius: 6px;
transition: all 0.2s ease-in-out;
cursor: pointer;

:hover{
	scale: 1.05;
}
`
