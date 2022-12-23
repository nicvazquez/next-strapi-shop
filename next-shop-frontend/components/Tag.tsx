interface Props {
	name: string;
}

export const Tag = ({ name }: Props) => {
	return (
		<div className="text-xxs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
			{name}
		</div>
	);
};
