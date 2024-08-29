import { ImRoad } from 'react-icons/im';
import carImg from '../../assets/car-us.png';
import HeadLine from '../ui/HeadLine';
import { FaMapPin, FaTrophy } from "react-icons/fa6";
import { BsTagFill } from 'react-icons/bs';
import useAnimation from '../Animation/useAnimation';


const ChooseUs = () => {
    useAnimation();
    return (
        <div className='px-2'>
            <HeadLine heading="Our Features" subHeading={
                <>
                    Discover a world of convenience, safety, and customization, paving the way for <br /> unforgettable adventures and seamless mobility solutions.
                </>
            } />
            {/* ------ */}
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div className="col-span-1 ">

                    <div className="flex-1 space-y-8  xl:space-y-24">

                        <div data-aos="fade-up" className="flex space-x-3">
                            <div className='bg-blue-600 p-4 h-14 rounded-lg flex justify-center items-center'>
                                <FaTrophy className='text-3xl text-white' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>First class services</h3>
                                <p className='font-semibold'>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="flex space-x-3">
                            <div className='bg-blue-600 p-4 h-14 rounded-lg flex justify-center items-center'>
                                <ImRoad className='text-3xl text-white' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>24/7 road assistance</h3>
                                <p className='font-semibold'>Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-2">
                    <img src={carImg} alt="car" />
                </div>

                <div className="col-span-1">
                    <div className="flex-1 space-y-8 xl:space-y-24">

                        <div
                            data-aos="fade-down"
                            className="flex space-x-3 justify-end text-right">
                            <div>
                                <h3 className='font-bold text-lg'>Quality at Minimum Expense</h3>
                                <p className='font-semibold'>Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
                            </div>
                            <div className='bg-blue-600 p-4 h-14 rounded-lg flex justify-center items-center'>
                                <BsTagFill className='text-3xl text-white' />
                            </div>
                        </div>

                        <div data-aos="fade-down" className="flex space-x-3 justify-end text-right">
                            <div>
                                <h3 className='font-bold text-lg '>Free Pick-Up & Drop-Off</h3>
                                <p className='font-semibold'>Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                            </div>
                            <div className='bg-blue-600 p-4 h-14 rounded-lg flex justify-center items-center'>
                                <FaMapPin className='text-3xl text-white' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;