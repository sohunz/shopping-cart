import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { productTypes } from "../types/productType";
import { RootState } from "../store/store";
import { removeAllCart } from "../store/cartSlice/cartSlice";

const ProductPreview = () => {
    const products = useSelector((state: RootState) => state.addCart.products);
    const dispatch = useDispatch();

    const handleClearAllCart = () => {
        dispatch(removeAllCart());
    };

    return (
        <div className="max-w-[1200px] mx-auto mt-5">
            <button
                className="bg-gray-200 px-3 py-2 rounded-md mb-5"
                onClick={handleClearAllCart}
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
