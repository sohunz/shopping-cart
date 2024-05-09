import { productTypes } from "../types/productType";

const ProductItem = ({ name, price }: productTypes) => {
    return (
        <div className="border p-3 rounded-lg">
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button className="border bg-cyan-400 p-2 rounded-md text-white mt-3">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
