import { useDispatch, useSelector } from "react-redux";
import { productTypes } from "../types/productType";
import { addCart, reduceCard, removeCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";

const ProductItem = ({ id, name, price }: productTypes) => {
    const total = useSelector((state: RootState) => state.addCart.products);

    const dispatch = useDispatch();

    const handleAddCart = (id: number) => {
        dispatch(addCart(id));
    };

    const handleReduceCart = (id: number) => {
        dispatch(reduceCard(id));
    };

    const handleRemoveCart = (id: number) => {
        dispatch(removeCart(id));
    };

    return (
        <div className="border p-3 rounded-lg">
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <div className="flex flex-row items-center justify-between">
                <div className="flex gap-1">
                    <button
                        className="w-[40px] border  p-2 rounded-md mt-3"
                        onClick={() => handleReduceCart(id)}
                    >
                        -
                    </button>
                    <button
                        className="w-[40px] border  p-2 rounded-md  mt-3"
                        onClick={() => handleAddCart(id)}
                    >
                        +
                    </button>
                </div>
                <p>
                    Add: {total.filter((i) => i.id === id).map((i) => i.count)}
                </p>
                <button
                    className="border bg-red-500 p-2 rounded-md text-white mt-3"
                    onClick={() => handleRemoveCart(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
