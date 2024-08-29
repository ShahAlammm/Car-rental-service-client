import bgImage from '../../assets/bg-9.jpg';
const CountState = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="relative  bg-cover bg-fixed bg-center bg-no-repeat "
        >
            <div className='container m-auto py-24 space-y-5 px-2'>
                <div className='lg:flex space-y-5 items-center gap-8 text-white'>
                    <h3 className='font-bold text-4xl flex-1'>We offer customers a wide range of commercial cars and luxury cars for any occasion.</h3>
                    <p className='font-semibold flex-1'>At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.</p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-16'>

                    <div className="stats bg-[#FFFFFF26]">
                        <div className="stat py-8 text-center text-white space-y-2">
                            <div className="stat-value">1,600</div>
                            <div className="stat-desc text-white text-lg font-semibold">Completed Orders</div>
                        </div>
                    </div>
                    <div className="stats bg-[#FFFFFF26] ">
                        <div className="stat py-8 text-center text-white space-y-2">
                            <div className="stat-value">1,400</div>
                            <div className="stat-desc text-white text-lg font-semibold">Happy Customers</div>
                        </div>
                    </div>
                    <div className="stats bg-[#FFFFFF26] ">
                        <div className="stat py-8 text-center text-white space-y-2">
                            <div className="stat-value">400</div>
                            <div className="stat-desc text-white text-lg font-semibold">Vehicles Fleet</div>
                        </div>
                    </div>
                    <div className="stats bg-slate-300/20 ">
                        <div className="stat py-8 text-center text-white space-y-2">
                            <div className="stat-value">8</div>
                            <div className="stat-desc text-white text-lg font-semibold">Years Experience</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CountState;