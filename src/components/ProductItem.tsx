import { useDispatch } from "react-redux";
import { productTypes } from "../types/productType";
import { addCart, removeCart } from "../store/cartSlice/cartSlice";

const ProductItem = ({ id, name, price }: productTypes) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCart());
    };

    const handleRemoveCart = (id: number) => {
        dispatch(removeCart(id));
    };

    return (
        <div className="border p-3 rounded-lg">
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <div className="flex flex-row items-center justify-between">
                <button
                    className="border bg-cyan-400 p-2 rounded-md text-white mt-3"
                    onClick={handleAddCart}
                >
                    Add to Cart
                </button>
                <button
                    className="border bg-red-500 p-2 rounded-md text-white mt-3"
                    onClick={() => handleRemoveCart(id)}
                >
                    Remove Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
