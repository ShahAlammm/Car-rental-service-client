import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

import carimg from '../../assets/car10.png';
import { Link } from "react-router-dom";

const CarCard = () => {
    return (
        <div className="py-16">
            <Card className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="cursor-pointer">
                    <CardHeader className="p-2">
                        <img
                            src={carimg}
                            className=" w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                            alt={"item?.name"}
                        />
                    </CardHeader>
                    <CardContent className="grid p-4">
                        <CardTitle className="mt-2 text-3xl font-extrabold">{'item?.name'}</CardTitle>
                        <p className="text-lg mt-3 font-semibold">Brand: {'item?.brand'}</p>
                        <p className="text-lg font-semibold">Price: {'item?.price'} <span className="text-sm">$</span></p>
                    </CardContent>
                </div>
                <CardFooter className="p-4 border-t border-blue-600">
                    <div className="indicator w-full">
                        {/* {item?.topSelling === true ? (<span className="indicator-item badge badge-primary">Top Sells</span>) : ""} */}
                        <Link to="/details">
                            <button className="btn bg-blue-500 w-full text-white hover:bg-blue-800" >
                                {/* onClick={() => navigate(`/details/${item?._id}`)} */}
                                View Details
                            </button>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CarCard;