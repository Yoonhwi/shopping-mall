import { Loading } from "@/components";
import { Button } from "@/components/ui/button";
import { categories, Endpoints } from "@/constants";
import { ProductCard } from "@/containers";
import { BaseLayout } from "@/layouts";
import { axiosInstance } from "@/service/axios-instance";
import { ProductCategoryType, ProductType } from "@/types";
import { useEffect, useState } from "react";

const defaultCategory: ProductCategoryType = {
  value: "all",
  label: "모두",
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategoryType>(defaultCategory);
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (selectedCategory.value === "all") {
      axiosInstance.get(Endpoints.AllProducts).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } else {
      axiosInstance
        .get(`${Endpoints.SpecificProduct}/${selectedCategory.value}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  return (
    <BaseLayout>
      <div className="flex flex-col gap-7 items-center">
        <h1 className="text-4xl font-[700]">Products</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {categories.map((category) => {
            return (
              <Button
                key={category.value}
                variant={
                  category.label === selectedCategory.label
                    ? "default"
                    : "outline"
                }
                onClick={() => {
                  setSelectedCategory(category);
                }}
                className="xl:px-12 xl:py-6"
              >
                {category.label}
              </Button>
            );
          })}
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full flex flex-col gap-2 px-8 md:px-0">
            <div>Showing: {data.length} items</div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {data.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default Home;
