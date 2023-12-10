import { ProductCard } from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetters from "../components/NewsLetters";

const Home = () => {
  return (
    <>
      <section className="py-[60px]">
        <div className="  w-[1170px] px-[15px] mx-auto bg-[#f8f8f8] py-4">jh</div>
      </section>

      <section className=" py-[60px]">
        <div className=" grid grid-cols-5 w-[1170px] px-[15px] mx-auto gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className=" py-[60px] bg-[#f8f8f8]">
        <div className="  w-[1170px] px-[15px] mx-auto ">
          <div className="mb-[40px]">
            <h2 className=" text-[20px] mb-[20px] text-[#222222] font-semibold">
              Top Selling of the Week
            </h2>
            <div className=" flex items-center">
              <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
              <hr className=" w-full" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <div className=" bg-[#f5f5f5] col-span-2 relative">
              <img
                src="https://jthemes.net/themes/f-html/smarttech/html/images/watch-bg.jpg"
                alt=""
              />
              <div className=" absolute inset-0  flex items-center px-[30px]">
                <div>
                  <h5 className=" text-[22px] font-semibold text-black mb-[10px]">
                    Smart Watch 2.0
                  </h5>
                  <p className=" text-[#555555] max-w-[195px] text-[14px]">
                    Space Gray Aluminum Case with Black/Volt Real Sport Band{" "}
                    <span className=" inline-block text-[#aaaaaa] ">38mm | 42mm</span>{" "}
                  </p>

                  <p className=" rounded-full text-[14px]  font-semibold bg-[#0088cc]  text-white hover:bg-black cursor-pointer py-[10px] px-[20px] mt-[20px] w-fit">
                    View Details
                  </p>
                </div>
              </div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className=" py-[60px]">
        <div className=" grid grid-cols-5 w-[1170px] px-[15px] mx-auto gap-6">
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
      </section>

      <section className="mt-[20px] py-[30px] bg-[#f8f8f8]">
        <div className=" grid grid-cols-8 w-[1170px] px-[15px] mx-auto gap-4 items-center justify-center">
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/14.png"
          />
          <img
            className=" h-[40px] object-fill  "
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/5.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/2.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/3.png"
          />
          <img
            className="h-[40px]  object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/4.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/6.png"
          />

          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/7.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/8.png"
          />
          {/* <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/9.png"
          /> */}
          {/* <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/10.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/1.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/12.png"
          />
          <img
            className=" h-[40px] object-fill"
            alt=""
            src="https://compughana.com/media/wysiwyg/brands/13.png"
          /> */}
        </div>
      </section>

      <NewsLetters />
      <Footer />
    </>
  );
};

export default Home;
