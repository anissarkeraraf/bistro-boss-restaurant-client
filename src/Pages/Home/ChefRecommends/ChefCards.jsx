

const ChefCards = ({ item }) => {
const {name, image, recipe} = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className=" pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="bg-[#e8e8e8] hover:bg-[#1f2937] duration-500 p-2 rounded text-yellow-600 uppercase border-b-2  border-yellow-600">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;