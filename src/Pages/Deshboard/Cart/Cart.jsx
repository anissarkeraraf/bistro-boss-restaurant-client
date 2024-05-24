
import Swal from "sweetalert2";
import useCart from "../../../componants/Hooks/useCart";
import SectionTiltle from "../../../componants/SectionTitle/SectionTiltle";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../componants/Hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTiltle
                subHeading='My Cart'
                heading='Wanna add more'
            ></SectionTiltle>
            <div className="bg-[#FEFEFE] w-10/12 mx-auto shadow mt-10 py-5">
                <div className="flex justify-evenly pb-10">
                    <h2 className="text-3xl">Items : {cart.length}</h2>
                    <h2 className="text-3xl">Total Price : {totalPrice}</h2>
                    <button className="bg-orange-400 px-4 rounded">Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-400 rounded-t-lg">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className=" avatar mask mask-squircle w-16 h-16 rounded-ful">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Cart;