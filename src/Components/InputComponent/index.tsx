import React, { FC, InputHTMLAttributes } from "react";
import { Input, InputLabel, InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

const InputComponent: FC<InputProps> = ({
	name,
	label,
	type,
	disabled,
	placeholder,
	value,
	onChange,
	max,
	pattern,
	onInput,
	defaultValue
}) => {
	return (
		<InputWrapper>
			{label && <InputLabel htmlFor={name}>{label}</InputLabel>}
			<Input
				name={name}
				type={type}
				disabled={disabled}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onInput={onInput}
				max={max}
				pattern={pattern}
				defaultValue={defaultValue}
			/>
		</InputWrapper>
	);
};

export default InputComponent;
