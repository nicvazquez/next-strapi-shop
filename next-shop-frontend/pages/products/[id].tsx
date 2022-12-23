import { GetStaticProps } from "next"
import Link from "next/link"
import { DataProduct } from "../../interfaces/products"
import { getProduct, getProducts } from "../../utils"

interface Props {
    product: DataProduct
}
function ProductPage({product}: Props) {

    return (
        <main>
            <header>
                <nav>
                    <Link href={"/"}>
                        {"<"} Home
                    </Link>
                </nav>
            </header>
            
            <div>
                <h1>{product.attributes.title}</h1>
                <p>${product.attributes.price}</p>
                <p>{product.attributes.description}</p>
            </div>
        </main>
    )

}

export const getStaticPaths = async () => {
    const products = await getProducts()
    const productsLengthArray = [...Array(products.data.length)].map((value, index) => `${index + 1}`)

    return {
        paths: productsLengthArray.map(id => ({
            params: { id }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as { id: string }
    const product = await getProduct(id)

    return {
        props: {
            product: product.data
        },
        revalidate: 86400
    }
}

export default ProductPage