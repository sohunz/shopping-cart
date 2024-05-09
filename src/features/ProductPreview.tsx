import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { productTypes } from "../types/productType";
import { RootState } from "../store/store";
import { clearProduct } from "../store/productSlice/productSlice";

const ProductPreview = () => {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const handleClearProduct = () => {
        dispatch(clearProduct());
    };

    return (
        <div className="max-w-[1200px] mx-auto mt-5">
            <button
                className="bg-gray-200 px-3 py-2 rounded-md mb-5"
                onClick={handleClearProduct}
            >
                Clear products
            </button>
            <div className="grid grid-cols-4 gap-3">
                {products.map((product: productTypes) => {
                    return (
                        <div key={product.id}>
                            <ProductItem {...product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductPreview;
