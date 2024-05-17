import { useEffect, useState } from "react";
import SectionTiltle from "../../../componants/SectionTitle/SectionTiltle";
import ManuItem from "../../Shared/ManuItem/ManuItem";
import UseManu from "../../../componants/Hooks/UseManu";


const PorpularManu = () => {
    const [manu] = UseManu();
    const popular = manu.filter(item => item.category === 'popular')

    // const [manu, setManu] = useState([]);

    // useEffect(() => {
    //     fetch('manu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setManu(popularItem)
    //         })
    // }, [])

    return (
        <div className="mb-10">
            <SectionTiltle
                subHeading={'Check it out'}
                heading={'from our manu'}
            ></SectionTiltle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>
        </div>
    );
};

export default PorpularManu;