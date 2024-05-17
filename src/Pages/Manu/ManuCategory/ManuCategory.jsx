import Cover from "../../Shared/Cover/Cover";
import ManuItem from "../../Shared/ManuItem/ManuItem";


const ManuCategory = ({ items, title, img }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
                {
                    items.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>
        </div>
    );
};

export default ManuCategory;