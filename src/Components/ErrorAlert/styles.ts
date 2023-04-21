import styled from "styled-components";

export const ErrorAlertContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ef4444;
color: #fff;
position: absolute;
bottom: 4rem;
left: 0;
right: 0;
margin: 0 auto;
min-width: 20rem;
max-width: 60%;
padding: 2rem 0;
border-radius: 8px;
`

export const ErrorAlertMessage = styled.p`
font-family: 'Inter';
font-weight: 500;
font-size: 18px;
line-break: normal;
`

export const CloseAlertButton = styled.button`
font-family: 'Inter';
font-weight: 500;
font-size: 18px;
line-break: normal;
background: none;
border: none;
position: absolute;
right: 5px;
top: 5px;
cursor: pointer;
transition: all 0.1s ease-in-out;

:hover{
  scale: 1.1
}
`