import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = UseAuth();
  // console.log(user)
  const navigate = useNavigate();
  const location = useLocation();
  const acioxSecure = useAxiosSecure();

  const handleFoodCart = food => {
    if (user && user.email) {
      const createItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      acioxSecure.post('/carts', createItem)
        .then(result => {
          console.log(result.data)
          if (result.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to you cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

    } else {
      Swal.fire({
        title: "Your are not logged in",
        text: "Please log in add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        };
      });
    }
  }



  return (
    <div className="card glass">
      <figure><img src={image} alt="car!" /></figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-4 rounded">{price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleFoodCart(item)}
            className="bg-[#e8e8e8] hover:bg-[#1f2937] duration-500 p-2 rounded text-yellow-600 uppercase border-b-2  border-yellow-600">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;