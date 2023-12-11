import { ProductCard } from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2 md:gap-4 lg:gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
