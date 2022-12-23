import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
	const routerPath = useRouter().asPath;

	const links = [
		{
			id: 1,
			name: "Home",
			path: "/",
		},
	];
	return (
		<header className="px-6 pt-6 lg:px-8">
			<nav aria-label="Global">
				{links.map(
					(link) =>
						routerPath !== link.path && (
							<Link
								key={link.id}
								href={link.path}
								className="underline font-semibold text-gray-900 hover:text-gray-900"
							>
								{link.name}
							</Link>
						)
				)}
			</nav>
		</header>
	);
};
