import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItems = ({item , itemIndex}) => {
    const dispatch = useDispatch();
const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("item Removed");
}
    return (
        <div className="flex space-x-12 items-center justify-center mb-20">

            <div className="h-[180px] w-full">
                <img src={item.image}  className="h-full w-full" alt="" />
            </div>
            <div className=" max-w-[400px]  ">
                <h1 className="text-xl font-bold text-gray-700 mb-4"> {item.title}</h1>
                <h1 className="text-lg  text-gray-700"> {item.description} </h1>
                <div className="flex  justify-between items-center mt-4 pr-10">
                    <p className=" text-green-600 font-bold text-xl"> ${item.price} </p>
                    <button className=" bg-red-200 p-2 rounded-full 
                    hover:bg-red-500">
                    <MdOutlineDelete onClick={removeFromCart}
                    className="text-2xl text-red-900" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItems;





