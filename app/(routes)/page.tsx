import getBillboards from "@/actions/getBillboards";
import { getProducts } from "@/actions/products";
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboards('90b6a9ac-b285-4e63-a803-b36451586c06');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage