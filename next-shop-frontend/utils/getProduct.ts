export async function getProduct(id: number | string) {
    const response = await fetch(`http://127.0.0.1:1337/api/products/${id}?populate=*`)
    const product = await response.json()
    
    return product
}