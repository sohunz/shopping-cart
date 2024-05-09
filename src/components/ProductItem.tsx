import { useDispatch } from "react-redux";
import { productTypes } from "../types/productType";
import { addCard } from "../store/cartSlice/cartSlice";

const ProductItem = ({ name, price }: productTypes) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCard());
    };

    return (
        <div className="border p-3 rounded-lg">
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button
                className="border bg-cyan-400 p-2 rounded-md text-white mt-3"
                onClick={handleAddCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
