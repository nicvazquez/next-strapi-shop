import Head from "next/head"
import Link from "next/link"
import { DataProduct, Products } from "../interfaces/products"
import { getProducts } from "../utils"

interface Props {
  products: Products
}

function HomePage( { products }: Props ) {

  return (
    <>
    <Head>
      <title>Next Shop</title>
    </Head>
     <h1>Next Shop</h1>

     <ul>
      {
        products.data.map((product: DataProduct) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.attributes.title}
            </Link>
          </li>
        ))
      }
     </ul>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()

  return { props: { products: products } }
}


export default HomePage