import Head from "next/head";
import { GradientBottom } from "../GradientBottom";
import { Header } from "../Header";

interface Props {
	children: JSX.Element | JSX.Element[];
	title: string;
	description: string;
}

export const MainLayout = ({ children, title, description }: Props) => {
	return (
		<div className="isolate bg-white">
			<Head>
				<title>{title}</title>
			</Head>
			<Header />

			<main>
				<div className="px-6 lg:px-8">
					<div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
						<div>
							<div>
								<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
									{title}
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
									{description}
								</p>
							</div>

							{children}
						</div>
					</div>
				</div>
			</main>

			<GradientBottom />
		</div>
	);
};
