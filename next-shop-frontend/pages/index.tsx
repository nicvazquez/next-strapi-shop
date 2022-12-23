import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainLayout } from "../components/Layouts/MainLayout";
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
			<input
				className=""
				type="search"
				placeholder="Search products"
				value={searchProduct}
				onChange={(e) => setSearchProduct(e.target.value)}
			/>

			<ul>
				{products.data
					.filter((product) =>
						product.attributes.title
							.toLowerCase()
							.includes(searchProduct.toLowerCase())
					)
					.map((product: Product) => (
						<li key={product.id}>
							<Image
								src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
								alt={`${product.attributes.image.data.attributes.alternativeText}`}
								width={50}
								height={50}
							/>

							<div>
								<Link href={`/products/${product.id}`}>
									{product.attributes.title}
									<span>{product.attributes.category}</span>
								</Link>
							</div>
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
