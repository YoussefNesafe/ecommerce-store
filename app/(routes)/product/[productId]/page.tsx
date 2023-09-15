import { getProductById, getProducts } from "@/actions/products"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"


type Props = {
  params: {
    productId: string
  }
}
const ProductPage = async ({ params: { productId } }: Props) => {
  const { category } = await getProductById(productId)
  const suggestedProducts = await getProducts({ categoryId: category.id })
  const filteredSuggestedProducts = suggestedProducts.filter(product => product.id !== productId)
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div> Gallery </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              Info
            </div>
          </div>
          <div className="my-10">
            <ProductList title="Related Items" items={filteredSuggestedProducts} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductPage