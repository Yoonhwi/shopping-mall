import { BaseLayout } from "@/layouts";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <BaseLayout>
      <div>{id}번</div>
    </BaseLayout>
  );
};

export default ProductDetail;
