import SectionTiltle from "../../../componants/SectionTitle/SectionTiltle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import group from '../../../assets/home/Group.jpg'


const TestiMonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mb-20">
            <SectionTiltle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            ></SectionTiltle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => (
                        <SwiperSlide>
                            <div className="mx-24 my-16 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img src={group} alt="" className="my-5" />
                                <p className="py-5">{review.details}</p>
                                <h2 className="text-3xl text-orange-500">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default TestiMonials;