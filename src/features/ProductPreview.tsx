import ProductItem from "../components/ProductItem";
import { products } from "../data/products";
import { productTypes } from "../types/productType";

const ProductPreview = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-5">
            <div className="grid grid-cols-4 gap-3">
                {products.map((product: productTypes) => {
                    return (
                        <div>
                            <ProductItem {...product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductPreview;
