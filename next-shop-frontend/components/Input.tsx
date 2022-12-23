import { ChangeEventHandler } from "react";

interface Props {
	state: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	className?: string;
	type: string;
	placeholder: string;
}

export const Input = ({
	state,
	handleChange,
	className,
	type,
	placeholder,
}: Props) => {
	return (
		<input
			className={`${className} block w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none my-6`}
			type={type}
			placeholder={placeholder}
			value={state}
			onChange={handleChange}
		/>
	);
};
