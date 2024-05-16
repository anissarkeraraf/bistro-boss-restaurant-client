import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import PorpularManu from "../PopularManue/PorpularManu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PorpularManu></PorpularManu>
        </div>
    );
};

export default Home;