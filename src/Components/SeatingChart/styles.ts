import styled from "styled-components";

interface Props {
  rows: number;
  chairs: number;
}

export const SeatingChartContainer = styled.div<Props>`
display: grid;
grid-template-columns: repeat(${props => (props.rows) || 0}, 1fr);
grid-template-rows: repeat(${props => props.chairs || 0}, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
padding: 1rem 0;
margin-right: 1rem;
box-sizing: border-box;
width: -moz-available;          /* WebKit-based browsers will ignore this. */
width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
width: fill-available;
heigth: -moz-available;          /* WebKit-based browsers will ignore this. */
heigth: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
heigth: fill-available;
`;