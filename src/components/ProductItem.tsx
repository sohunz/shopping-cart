import { useDispatch, useSelector } from "react-redux";
import { productTypes } from "../types/productType";
import { addCart, reduceCard, removeCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";

const ProductItem = ({ id, name, price, img }: productTypes) => {
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
        <div className="p-5 rounded-xl shadow bg-white">
            <img src={img} alt="" />
            <p className="text-center text-2xl text-gray-800 font-bold my-3">
                {name}
            </p>
            <p className="text-lg mt-4 mb-2 text-center">${price}</p>
            <div className="flex flex-row items-center justify-between mt-3">
                <div className="flex items-center gap-1">
                    <button
                        className="w-[40px] border  p-2 rounded-full"
                        onClick={() => handleReduceCart(id)}
                    >
                        -
                    </button>
                    <button
                        className="w-[40px] border  p-2 rounded-full"
                        onClick={() => handleAddCart(id)}
                    >
                        +
                    </button>
                </div>
                <p>
                    Added:{" "}
                    {total.filter((i) => i.id === id).map((i) => i.count)}
                </p>
                <button
                    className="border bg-red-500 px-3 py-[9px] rounded-md text-white text-sm"
                    onClick={() => handleRemoveCart(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
