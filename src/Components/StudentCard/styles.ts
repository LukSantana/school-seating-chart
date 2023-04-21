import styled from "styled-components";

interface StudentCardContainerProps{
  isDragging: boolean;
}

export const StudentCardContainer = styled.div<StudentCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
	rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  opacity: ${(props) => !props.isDragging ? 1 : 0};
  cursor: grab;
`

export const InputContainer = styled.h2`
  margin: 1rem;
`