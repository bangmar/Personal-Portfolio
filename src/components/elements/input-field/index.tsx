import { FC, ReactElement, ReactNode } from "react";

type TInputFieldProps = {
	children: ReactNode;
};

const InputField: FC<TInputFieldProps> & {
	label: typeof Label;
	input: typeof Input;
	textArea: typeof TextArea;
} = ({ children }): ReactElement => {
	return <section className='flex flex-col gap-2.5 mb-6'>{children}</section>;
};

export default InputField;

type TInputProps = {
	name: string;
	type: "text" | "email" | "password" | "number";
	placeholder: string;
	classname?: string;
};

const Input: FC<TInputProps> = ({
	name,
	type,
	placeholder,
	classname,
}): ReactElement => {
	return (
		<input
			name={name}
			id={name}
			type={type}
			className={`${classname} bg-black-secondary px-6 py-2.5 outline-gradient-via2/50 text-neutral-200  placeholder:text-neutral-400 text-sm rounded-md shadow-md`}
			placeholder={placeholder}
		/>
	);
};

type TLabelProps = {
	htmlfor: string;
	classname?: string;
	label: string;
};

const Label: FC<TLabelProps> = ({
	htmlfor,
	label,
	classname,
}): ReactElement => {
	return (
		<label htmlFor={htmlfor} className={`${classname} text-sm font-bold`}>
			{label}
		</label>
	);
};

type TTextAreaProps = {
	name: string;
	id: string;
	col: number;
	row: number;
	classname?: string;
};
const TextArea: FC<TTextAreaProps> = ({
	col,
	id,
	name,
	row,
	classname,
}): ReactElement => {
	return (
		<textarea
			name={name}
			id={id}
			cols={col}
			rows={row}
			className={`${classname} resize-none text-sm px-6 py-2.5 bg-black-secondary outline-gradient-via2/50 text-neutral-200 `}></textarea>
	);
};

InputField.label = Label;
InputField.input = Input;
InputField.textArea = TextArea;
