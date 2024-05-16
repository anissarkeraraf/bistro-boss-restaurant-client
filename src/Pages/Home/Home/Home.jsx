import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featurd from "../Featured/Featurd";
import PorpularManu from "../PopularManue/PorpularManu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PorpularManu></PorpularManu>
            <ChefRecommends></ChefRecommends>
            <Featurd></Featurd>
        </div>
    );
};

export default Home;