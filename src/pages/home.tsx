import { Loading } from "@/components";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/containers";
import { Endpoints } from "@/constants";
import { BaseLayout } from "@/layouts";
import { ProductCategoryType, ProductType } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const categories: ProductCategoryType[] = [
  {
    value: "all",
    label: "모두",
  },
  {
    value: "electronics",
    label: "전자제품",
  },
  {
    value: "jewelery",
    label: "보석",
  },
  {
    value: "men's clothing",
    label: "남성의류",
  },
  {
    value: "women's clothing",
    label: "여성의류",
  },
];

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
      axios.get(Endpoints.AllProducts).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } else {
      axios
        .get(`${Endpoints.SpecificProduct}/${selectedCategory.value}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  console.log(data);

  console.log("rerender");

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
          <div className="px-8 w-full flex flex-col gap-2">
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
