import Image from "next/image"
import { getProduct } from "@/lib/products"
import { Star, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const page = async ({
    params,
  }: {
    params: Promise<{ id: number }>
  }) => {
    const id = (await params).id
    const product = await getProduct(id);
    const discountedPrice = product.price * (1 - product.discountPercentage / 100)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.title} - Image ${index + 1}`}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg text-muted-foreground">{product.brand}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating.toFixed(2)})</span>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold">${discountedPrice.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</p>
            <Badge>{product.discountPercentage}% OFF</Badge>
          </div>
          <p>{product.description}</p>
          <div className="space-y-2">
            <p>
              <strong>Availability:</strong> <span className="text-red-500">{product.availabilityStatus}</span>
            </p>
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <div>
              <strong>Tags:</strong>{" "}
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="mr-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          <Separator />
          <div className="space-y-2 text-sm">
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="space-y-1">
              <li>
                <strong>Weight:</strong> {product.weight} oz
              </li>
              <li>
                <strong>Dimensions:</strong> {product.dimensions.width}" x {product.dimensions.height}" x{" "}
                {product.dimensions.depth}"
              </li>
              <li>
                <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Additional Information</h3>
            <ul className="space-y-1">
              <li>
                <strong>Barcode:</strong> {product.meta.barcode}
              </li>
              <li>
                <strong>Created:</strong> {new Date(product.meta.createdAt).toLocaleDateString()}
              </li>
              <li>
                <strong>Last Updated:</strong> {new Date(product.meta.updatedAt).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {/* <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default page