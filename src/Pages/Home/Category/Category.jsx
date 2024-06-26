import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTiltle from '../../../componants/SectionTitle/SectionTiltle';

const Category = () => {
    return (
        <section>
            <SectionTiltle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTiltle>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className="md:text-4xl uppercase text-center text-white drop-shadow-xl -mt-7  md:-mt-10 lg:-mt-16">salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className="md:text-4xl uppercase text-center text-white -mt-7 md:-mt-10 lg:-mt-16">pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className="md:text-4xl uppercase text-center text-white -mt-7 md:-mt-10 lg:-mt-16">soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className=" md:text-4xl uppercase text-center text-white -mt-7 md:-mt-10 lg:-mt-16">dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className="md:text-4xl uppercase text-center text-white -mt-7 md:-mt-10 lg:-mt-16">salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;