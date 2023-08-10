import { FC } from "react";

type TButtonProps = {
	type: "button" | "reset" | "submit";
	classify: "primary" | "secondary";
	name: string;
	classname?: string;
	teks: string;
	disabled: boolean;
};

const Button: FC<TButtonProps> = ({
	classify,
	name,
	type,
	classname,
	teks,
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			className={`border-2  h-9 w-fit   px-4 rounded-full  shadow-md transition-all duration-150 ease-transition ${classname} ${
				classify === "primary"
					? "secondary-gradient hover:primary-gradient border-transparent"
					: " border-neutral-400 hover:bg-neutral-800 hover:text-white-primary"
			}`}
			id={name}
			name={name}
			type={type}>
			<p className='text-xs md:text-sm font-bold'>{teks}</p>
		</button>
	);
};

export default Button;
