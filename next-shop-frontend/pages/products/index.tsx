import Head from "next/head"
import Link from "next/link"
import { ProductsPageLayout } from "../../components/Layouts/ProductsPageLayout"
import { DataProduct, Products } from "../../interfaces/products"
import { getProducts } from "../../utils"

interface Props {
  products: Products
}

function ProductsPage( { products }: Props ) {

  return (
    <ProductsPageLayout title="Products" products={products}>
      <p>Products list</p>
    </ProductsPageLayout>  
  )
}

export async function getStaticProps() {
  const products = await getProducts()

  return { props: { products: products } }
}


export default ProductsPage