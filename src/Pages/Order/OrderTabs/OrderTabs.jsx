import FoodCard from "../../../componants/FoodCard/FoodCard";


const OrderTabs = ({itmes}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                itmes.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabs;