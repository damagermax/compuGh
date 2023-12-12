import { ProductCard2 } from "../shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";

import { useMemo, memo } from "react";

const RecentlyViewed = () => {
  const MemoizedProductCard = memo(ProductCard2);

  const memoizedProducts = useMemo(() => {
    return Array.from({ length: 5 }, (post, key) => <MemoizedProductCard key={key} />);
  }, []);

  return (
    <section className=" py-[30px] md:py-[50px] lg:py-[60px] ">
      <div className="  max-w-[1170px] px-[15px] mx-auto ">
        <SectionHeader title={" Recently Viewed"} />
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  md:gap-4 lg:gap-6  gap-2">
          {memoizedProducts}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
