import { useEffect, useState } from "react";
import SectionTiltle from "../../../componants/SectionTitle/SectionTiltle";
import ChefCards from "./ChefCards";


const ChefRecommends = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const manuData = data.filter(item => item.category === 'salad');
                setItems(manuData);
            })
    }, [])

    return (
        <div>
            <SectionTiltle
                subHeading={'Should Try'}
                heading={'Chef Recommends'}
            ></SectionTiltle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    items.slice(0, 3).map(item => <ChefCards
                    key={item._id}
                    item={item}
                    ></ChefCards>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;