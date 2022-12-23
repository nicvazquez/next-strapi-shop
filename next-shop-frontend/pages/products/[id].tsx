import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { Product } from "../../interfaces/products";
import { getFilteredProducts, getProduct, getProducts } from "../../utils";

interface Props {
	product: Product;
	relatedProducts: Product[];
}
function ProductPage({ product, relatedProducts }: Props) {
	return (
		<>
			<Header />

			<main>
				<div>
					<Image
						src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
						alt={`${product.attributes.image.data.attributes.alternativeText}`}
						width={100}
						height={100}
					/>
					<div>
						<h1>{product.attributes.title}</h1>
						<span>{product.attributes.category}</span>
					</div>
				</div>
				<p>
					${product.attributes.price} - {product.attributes.description}
				</p>
			</main>

			{relatedProducts.length > 0 && (
				<div>
					<h2>Related products:</h2>
					<ul>
						{relatedProducts.map((product) => (
							<li key={product.id}>
								<div>
									<Link href={`/products/${product.id}`}>
										{product.attributes.title}
									</Link>{" "}
									-<span>{product.attributes.category}</span>
								</div>
								<p>{product.attributes.description.slice(0, 70)}...</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export const getStaticPaths = async () => {
	const products = await getProducts();
	const productsLengthArray = [...Array(products.data.length)].map(
		(value, index) => `${index + 1}`
	);

	return {
		paths: productsLengthArray.map((id) => ({
			params: { id },
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const product = await getProduct(id);

	const filteredProducts = await getFilteredProducts(
		"category",
		"eqi",
		product.data.attributes.category
	);
	const relatedProducts = filteredProducts.data.filter(
		(filteredProduct: Product) =>
			filteredProduct.attributes.title !== product.data.attributes.title
	);

	return {
		props: {
			product: product.data,
			relatedProducts: relatedProducts,
		},
		revalidate: 86400,
	};
};

export default ProductPage;
