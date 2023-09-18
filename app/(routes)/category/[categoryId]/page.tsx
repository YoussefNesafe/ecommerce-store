import { getCategoryById } from "@/actions/categories"
import { getColors } from "@/actions/colors";
import { getProducts } from "@/actions/products";
import { getSizes } from "@/actions/sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;

type Props = {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string;
    sizeId: string
  }
}

const CategoryPage = async ({ params: { categoryId }, searchParams: { colorId, sizeId } }: Props) => {
  const products = await getProducts({ categoryId, colorId, sizeId });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategoryById(categoryId)
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage