import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { productTypes } from "../types/productType";
import { RootState } from "../store/store";
import { removeAllCart, resetData } from "../store/cartSlice/cartSlice";

const ProductPreview = () => {
    const products = useSelector((state: RootState) => state.addCart.products);
    const totalPrice = useSelector(
        (state: RootState) => state.addCart.totalPrice
    );
    const dispatch = useDispatch();

    const handleClearAllCart = () => {
        dispatch(removeAllCart());
    };

    const handleResetData = () => {
        dispatch(resetData());
    };

    return (
        <div>
            <div className="max-w-[1280px] mx-auto mt-10">
                <div className="flex justify-between mb-5">
                    {products.length > 0 ? (
                        <button
                            className="bg-red-600 text-white shadow px-3 py-2 rounded-md mb-5"
                            onClick={handleClearAllCart}
                        >
                            Remove all
                        </button>
                    ) : (
                        <button
                            className="bg-gray-600 text-white shadow px-3 py-2 rounded-md mb-5"
                            onClick={handleResetData}
                        >
                            Reset data
                        </button>
                    )}
                    <div>
                        <p className="text-2xl font-semibold">
                            Total: ${totalPrice}
                        </p>
                    </div>
                </div>
                {products.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {products.map((product: any) => {
                            return (
                                <div key={product.id}>
                                    <ProductItem {...product} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="max-w-[1200px] mx-auto mt-10">
                        <p className="text-3xl font-semibold text-center text-gray-400">
                            Your cart is empty!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPreview;
