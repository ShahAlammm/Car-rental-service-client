import image from '../../assets/car10.png';

const Details = () => {
    return (
        <div className="container m-auto py-24">
            <div className="grid lg:grid-cols-3">
                <div className="col-span-2">
                    <img src={image} className="w-full" alt="" />
                </div>
                <div className="col-span-1">
                    {/* Additional content */}
                </div>
            </div>
            <div>
                {/* Review */}
            </div>
            <button className='btn btn-primary w-full'>Book Now</button>
        </div>
    );
};

export default Details;
