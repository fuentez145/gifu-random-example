import HeaderCrumb from "@/components/HeaderCrumb"
import ProductList from "@/components/product-list"


export default function Home() {
  return (
    <>
      <HeaderCrumb />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <ProductList />
      </div>
    </>
  )
}

