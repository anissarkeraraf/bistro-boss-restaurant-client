import SectionTiltle from "../../../componants/SectionTitle/SectionTiltle";
import featurdImg from '../../../assets/home/featured.jpg';
import './featured.css';


const Featurd = () => {
    return (
        <div className="featured-section bg-fixed pt-5 text-white">
            <SectionTiltle
                subHeading={'Check it out'}
                heading={'Feature Manu'}
            ></SectionTiltle>


            <div className="md:flex justify-center items-center pb-20 pt-12 px-20 bg-slate-500 bg-opacity-40">
                <img className="md:w-2/5" src={featurdImg} alt="" />
                <div className="ml-10">
                    <h2>March 20, 2028</h2>
                    <h2 className="uppercase">Where can i get some</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eius sint numquam vel nesciunt id, autem beatae enim repellendus obcaecati a voluptate corporis pariatur officiis nulla omnis rem voluptatem excepturi dolore iste dolorem. Molestiae possimus vitae aliquam a perspiciatis ducimus!</p>
                    <button className="py-2 border-b-2 rounded px-2 border-white">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featurd;