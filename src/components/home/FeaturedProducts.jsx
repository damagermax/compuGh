import { memo, useMemo } from "react";

import SectionHeader from "../shared/SectionHeader";
import { ProductCard } from "../shared/ProductCard";

const FeaturedProducts = () => {
  const MemoizedProductCard = memo(ProductCard);

  const memoizedProducts = useMemo(() => {
    return Array.from({ length: 5 }, (post, key) => <MemoizedProductCard key={key} />);
  }, []);
  return (
    <section className="py-[40px] md:py-[50px] lg:py-[60px]">
      <div className="max-w-[1170px] px-[15px] mx-auto">
        {/* <SectionHeader title={"Featured products"} seeAll={true} /> */}
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 o gap-2 md:gap-4 lg:gap-6">
          {memoizedProducts}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
