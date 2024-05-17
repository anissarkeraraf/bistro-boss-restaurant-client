import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../../src/assets/menu/banner3.jpg'
import PorpularManu from "../Home/PopularManue/PorpularManu";

const Manu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Manu</title>
            </Helmet>
            <Cover img={coverImg} title='our manu'></Cover>
            <PorpularManu></PorpularManu>
            <Cover img={coverImg} title='our manu'></Cover>
            <PorpularManu></PorpularManu>
            <Cover img={coverImg} title='our manu'></Cover>
            <PorpularManu></PorpularManu>
            <Cover img={coverImg} title='our manu'></Cover>
            <PorpularManu></PorpularManu>
            <Cover img={coverImg} title='our manu'></Cover>
            <PorpularManu></PorpularManu>
        </div>
    );
};

export default Manu;