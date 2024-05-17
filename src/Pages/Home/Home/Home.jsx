import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featurd from "../Featured/Featurd";
import PorpularManu from "../PopularManue/PorpularManu";
import TestiMonials from "../TestiMonials/TestiMonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PorpularManu></PorpularManu>
            <ChefRecommends></ChefRecommends>
            <Featurd></Featurd>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;