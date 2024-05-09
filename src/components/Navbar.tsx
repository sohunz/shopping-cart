import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="w-full border">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between py-5">
                    <p className="text-2xl font-semibold">LOGO</p>
                    <div className="relative">
                        <MdOutlineLocalGroceryStore size={35} />
                        <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full flex items-center justify-center">
                            <p className="text-sm font-semibold text-white">
                                2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;