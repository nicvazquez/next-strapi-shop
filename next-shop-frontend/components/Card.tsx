import Image from "next/image";
import { Tag } from "./Tag";

interface Props {
	imgSrc: string;
	imgAlt: string;
	title: string;
	category: string;
	description: string;
}
export const Card = ({
	imgSrc,
	imgAlt,
	title,
	category,
	description,
}: Props) => {
	return (
		<>
			<div className="flex gap-4">
				<Image src={imgSrc} alt={imgAlt} width={50} height={30} />

				<div>
					<h2 className="font-bold text-lg">{title}</h2>
					<Tag name={category} />
				</div>
			</div>

			<p className="text-gray-500 text-sm">{description.slice(0, 50)}...</p>
		</>
	);
};
