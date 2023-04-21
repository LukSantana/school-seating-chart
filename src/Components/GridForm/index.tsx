import { useContext, useEffect } from "react";
import { FormContainer, GridFormContainer, SubmitButton } from "./styles";
import InputComponent from "../InputComponent";
import { GridContext } from "../../Context/gridContext";
import { ErrorContext } from "../../Context/errorContext";
import ErrorAlert from "../ErrorAlert";

const GridForm = () => {
	const {chairs, setChairs, rows, setRows, generateGrid} = useContext(GridContext)
	const {error, errorMessage} = useContext(ErrorContext)

	const handleSetChairs = (e: any) => {
		setChairs(e.target.value)
	}

	const handleSetRows = (e: any) => {
		setRows(e.target.value)
	}

	return (
		<GridFormContainer>
			<FormContainer>
				<InputComponent
					name="rows"
					label="Fileiras"
					type="text"
					value={rows}
					onChange={handleSetRows}
				/>
				<InputComponent
					name="chairs"
					label="Cadeiras por fileira"
					type="text"
					value={chairs}
					onChange={handleSetChairs}
				/>
				<SubmitButton onClick={generateGrid}>Gerar</SubmitButton>
			</FormContainer>
			{error && <ErrorAlert errorMessage={errorMessage}/>}
		</GridFormContainer>
	);
};

export default GridForm;
