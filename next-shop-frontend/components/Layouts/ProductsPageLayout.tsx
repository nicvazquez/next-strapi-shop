import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Product, Products } from "../../interfaces/products"
import { Header } from "../Header/Header"

interface Props {
    children: JSX.Element | JSX.Element[]
    title: string
    products: Products
}

export const ProductsPageLayout = ({children, title, products}: Props) => {

  const [searchProduct, setSearchProduct] = useState<string>("")

  return (
    <main>
        <Head>
            <title>{title}</title>
        </Head>

        <Header />

        <h1 className="mt-2 mb-2">{title}</h1>

        {children}

        <input 
            className="mt-1" 
            type="search" 
            placeholder="Search products"
            value={searchProduct}
            onChange={(e => setSearchProduct(e.target.value))}
        />

        <ul className="d-flex justify-between">
            {
                products.data.filter(
                    product => product.attributes.title
                               .toLowerCase()
                               .includes(searchProduct.toLowerCase())
                ).map((product: Product) => (

                <li key={product.id} className="d-flex align-center gap-1">

                    <Image 
                        src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`} 
                        alt={`${product.attributes.image.data.attributes.alternativeText}`} 
                        width={50} 
                        height={50} 
                    />

                    <div className="d-flex flex-column">
                        <Link href={`/products/${product.id}`} className="d-flex flex-column">
                            {product.attributes.title}
                            <span className="category">{product.attributes.category}</span>
                        </Link>
                    </div>

                </li>

                ))
            }
        </ul>
    </main>
  )
}
