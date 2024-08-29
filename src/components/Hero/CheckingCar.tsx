import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import imageBG from '../../assets/bg-around.jpg';
import { MdDoubleArrow } from 'react-icons/md';

const CheckingCar = () => {
    return (
        <div
            style={{ backgroundImage: `url(${imageBG})` }}
            className="relative  bg-cover bg-fixed bg-center bg-no-repeat "
        >
            {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}


            <div className="hero py-24">
                <div className="card  rounded-none rounded-br-[42px] rounded-tl-[42px] bg-white/60 text-black w-full max-w-6xl shrink-0">
                    <form className="card-body">
                        <div className="lg:flex gap-8">
                            {/* Start From */}
                            <div className="lg:flex-col gap-8 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Start Place</span>
                                    </label>
                                    <input type="place" placeholder="place" className="input input-bordered input-info" required />
                                </div>
                                {/* Start Date and Place */}
                                <div className="flex gap-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Start Date</span>
                                        </label>
                                        <input type="date" placeholder="date" className="input input-bordered input-info" required />
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Start Time</span>
                                        </label>
                                        <input type="time" placeholder="time" className="input input-bordered input-info" required />
                                    </div>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal divider-info"><FaArrowRightArrowLeft className='text-5xl' /></div>
                            {/* Destination */}
                            <div className="lg:flex-col gap-8 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Destination</span>
                                    </label>
                                    <input type="destination" placeholder="destination" className="input input-info input-bordered" required />
                                </div>
                                {/* End Date and Place */}
                                <div className="flex gap-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">End Date</span>
                                        </label>
                                        <input type="date" placeholder="date" className="input input-bordered input-info" required />
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">End Time</span>
                                        </label>
                                        <input type="time" placeholder="time" className="input input-bordered input-info" required />
                                    </div>
                                </div>


                            </div>
                            <div className='flex items-center justify-center w-full pt-5 lg:pt-0'>
                                <button className='btn border-none hover:bg-secondary bg-blue-600 text-lg  text-white shadow-lg shadow-black/30 font-bold rounded-3xl'>Find My Car <span className='text-2xl'><MdDoubleArrow /></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default CheckingCar;
