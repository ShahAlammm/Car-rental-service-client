import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from 'react-router-dom';

import image1 from '../../assets/car10.png';
import image2 from '../../assets/car11.png';
import image3 from '../../assets/car13.png';
import image4 from '../../assets/car14.png';
import image5 from '../../assets/car15.png';
import image6 from '../../assets/car17.png';
import imageBg from '../../assets/istockphoto-1082720986-612x612.jpg';
import HeadLine from '../ui/HeadLine';


const posts = [
    {
        _id: '1',
        title: 'title 11',
        description: 'description 1',
        image: image1,
        category: 'category 1',
        userImg: image6,
    },
    {
        _id: '1',
        title: 'title 10',
        description: 'description 1',
        image: image2,
        category: 'category 1',
        userImg: 'https://placeimg.com/300/200/arch',
    },
    {
        _id: '1',
        title: 'title 1',
        description: 'description 1',
        image: image3,
        category: 'category 1',
        userImg: 'https://placeimg.com/300/200/arch',
    },
    {
        _id: '2',
        title: 'title 2',
        description: 'description 2',
        image: image4,
        category: 'category 2',
        userImg: 'https://placeimg.com/300/200/arch',
    },
    {
        _id: '3',
        title: 'title 3',
        description: 'description 3',
        image: image5,
        category: 'category 3',
        userImg: 'https://placeimg.com/300/200/arch',
    },
]



const Featured = () => {
    return (
        <div className='py-24'>
            <HeadLine heading="Our Vehicle Fleet" subHeading={
                <>
                    Driving your dreams to reality with an exquisite fleet of versatile vehicles for
                    <br />
                    unforgettable journeys.
                </>
            } />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                autoHeight={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}

            >
                {
                    posts?.map((item) => <SwiperSlide key={item?._id}>
                        <div key={item?._id} className="card shadow-inner hover:shadow-blue-500">
                            <figure className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imageBg})` }}><img className=" mt-40 w-full md:h-60 xl:h-80 transition-transform duration-300 hover:scale-105" src={item?.image} alt="image" ></img></figure>
                            <div className="card-body">
                                <div className="flex gap-3 items-center">
                                    <div>

                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 text-justify"><span className="hover:text-blue-700">Author</span> <span className="px-1 text-xs">||</span> <span className="hover:text-blue-700">{item?.category}</span></p>
                                    </div>
                                </div>
                                <NavLink to={`/blog/${item?._id}`} className="card-title w-full h-16 hover:text-blue-700">{item?.title
                                    .split(' ')
                                    .splice(0, 5)
                                    .join(' ')}...</NavLink>
                                <hr className="border-dashed border border-gray-300" />
                                <p className="text-justify text-sm text-gray-600">{item?.description
                                    .split(' ')
                                    .splice(0, 12)
                                    .join(' ')}....</p>
                                <div className="card-actions justify-start">
                                    {/* <NavLink to={`/blog/${item?._id}`} className="text-blue-800 hover:text-purple-700 flex items-center  font-bold">Read More <span className="ml-2"><FaArrowRightFromBracket></FaArrowRightFromBracket></span></NavLink> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Featured;