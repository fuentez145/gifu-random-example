import Image from "next/image"
import {getProducts} from "@/lib/products"
import Link from "next/link";
Link
// import type { Product } from "@/types/product"


const ProductList = async () => {
    const {products} = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <Link href={`/products/${product.id}`} key={product.id}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
        src={product.thumbnail || "/placeholder.svg"}
        alt={product.title}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
          />
          <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <p className="text-gray-500">{product.description}</p>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
          </div>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default ProductList

