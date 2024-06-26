import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar = () => {
    const cardCouter = useSelector((state: RootState) => state.addCart.total);

    return (
        <div className="w-full border shadow">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-center justify-between py-5">
                    <p className="text-2xl font-semibold">LOGO</p>
                    <div className="relative">
                        <MdOutlineLocalGroceryStore size={35} />
                        {cardCouter > 0 ? (
                            <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full flex items-center justify-center">
                                <p className="text-sm font-semibold text-white">
                                    {cardCouter}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
