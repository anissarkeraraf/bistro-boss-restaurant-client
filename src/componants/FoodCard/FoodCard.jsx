

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 glass">
      <figure><img src={image} alt="car!" /></figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-4 rounded">{price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="bg-[#e8e8e8] hover:bg-[#1f2937] duration-500 p-2 rounded text-yellow-600 uppercase border-b-2  border-yellow-600">order now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;