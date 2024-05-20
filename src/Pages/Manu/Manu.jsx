import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
import UseManu from "../../componants/Hooks/UseManu";
import SectionTiltle from "../../componants/SectionTitle/SectionTiltle";
import ManuCategory from "./ManuCategory/ManuCategory";


const Manu = () => {
    const [manu] = UseManu();
    const dessert = manu.filter(item => item.category === 'dessert')
    const salad = manu.filter(item => item.category === 'salad')
    const pizza = manu.filter(item => item.category === 'pizza')
    const soup = manu.filter(item => item.category === 'soup')
    const offered = manu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Manu</title>
            </Helmet>
            <Cover img={coverImg} title='our manu'></Cover>
            {/* Main  */}
            <SectionTiltle subHeading="Don't miss" heading="Today's Offer"></SectionTiltle>
            {/* Offerd */}
            <ManuCategory items={offered} btn='Order Your Favourit food'></ManuCategory>

            {/* Dessert */}
            <ManuCategory
            items={dessert}
            title='dessert'
            img={dessertImg}
            btn='Order Your Favourit food'
            ></ManuCategory>

            {/* Pizza */}
            <ManuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            btn='Order Your Favourit food'
            ></ManuCategory>

            {/* Salads */}
            <ManuCategory
            items={salad}
            title="salads"
            img={saladImg}
            btn='Order Your Favourit food'
            ></ManuCategory>

            {/* Soup */}
            <ManuCategory
            items={soup}
            title="soups"
            img={soupImg}
            btn='Order Your Favourit food'
            ></ManuCategory>
          
        </div>
    );
};

export default Manu;