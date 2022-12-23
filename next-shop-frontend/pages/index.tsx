import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../components/Input";
import { MainLayout } from "../components/Layouts/MainLayout";
import { Tag } from "../components/Tag";
import { Product, Products } from "../interfaces/products";
import { getProducts } from "../utils";

interface Props {
	products: Products;
}

function HomePage({ products }: Props) {
	const [searchProduct, setSearchProduct] = useState<string>("");

	return (
		<MainLayout
			title="Next Marketplace"
			description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
		qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
		occaecat fugiat aliqua."
		>
			<Input
				className="my-10"
				state={searchProduct}
				handleChange={(e) => setSearchProduct(e.target.value)}
				type="search"
				placeholder="Search products"
			/>

			<ul className="flex flex-wrap align-center gap-10 justify-center">
				{products.data
					.filter((product) =>
						product.attributes.title
							.toLowerCase()
							.includes(searchProduct.toLowerCase())
					)
					.map((product: Product) => (
						<li
							key={product.id}
							className="block p-6 rounded-lg shadow-lg hover:shadow-md transition bg-white w-full md:w-72"
						>
							<Link
								href={`/products/${product.id}`}
								className="flex flex-col gap-4"
							>
								<div className="flex gap-4">
									<Image
										src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
										alt={`${product.attributes.image.data.attributes.alternativeText}`}
										width={50}
										height={30}
									/>

									<div>
										<h2 className="font-bold">{product.attributes.title}</h2>
										<Tag name={product.attributes.category} />
									</div>
								</div>

								<p className="text-gray-500">
									{product.attributes.description.slice(0, 50)}...
								</p>
							</Link>
						</li>
					))}
			</ul>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const products = await getProducts();

	return { props: { products: products } };
}

export default HomePage;
