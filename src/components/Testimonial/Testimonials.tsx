
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HeadLine from "../ui/HeadLine";


const testimonialList = [
    {
        author: {
            fullName: "Akshay Kumar",
            picture:
                "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
            designation: "Founder / CEO",
        },

        description:
            "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.",
    },
    {
        author: {
            fullName: "Raima Sen",
            picture:
                "https://i.ibb.co/y4ZSqBB/man-2.jpg",
            designation: "UI Designer",
        },

        description:
            "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.",
    },
    {
        author: {
            fullName: "Onabile Oladele",
            picture:
                "https://i.ibb.co/PCFnpQh/pexels-pixabay-220453.jpg",
            designation: "HR Manager",
        },

        description:
            "It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s ",
    },
    {
        author: {
            fullName: "Tasin Khan",
            picture:
                "https://i.ibb.co/GPZtc87/man-3.jpg",
            designation: "Officer",
        },

        description:
            "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
    },
    {
        author: {
            fullName: "Vishal Kapur",
            picture:
                "https://i.ibb.co/7VQBzR5/man-1.jpg",
            designation: "Manager",
        },

        description:
            "It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. ",
    },
];



const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { author, description } = testimonialList[index];

    const handleControl = (type: "prev" | "next") => {
        if (type === "prev") {
            setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
        } else if (type === "next") {
            setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
        }
    };
    return (
        <section className=" light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <HeadLine heading="Community Reviews" subHeading={<>Traveling is an enriching experience that allows us to explore new destinations, immerse <br /> ourselves in different cultures, and create lifelong memories."</>} />

                <div className="flex justify-center">
                    <div className="max-w-5xl">
                        <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 mt-12">
                            <div className="col-span-12 md:col-span-5 lg:col-start-8 text-center lg:order-2">
                                <div className="relative z-[1]">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -z-[1]" />
                                    <img
                                        src={author.picture}
                                        alt={author.fullName}
                                        className="rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -translate-x-2 -translate-y-2 md:-translate-x-6 md:-translate-y-6 hover:translate-x-0 hover:translate-y-0 transition duration-300"
                                    />
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 ezy__testimonial15-content text-center md:text-start">
                                <div className="flex flex-col justify-center h-full">
                                    {/* <Rating rating={rating} showLabel={false} /> */}
                                    <h4 className="text-2xl font-medium mb-1">
                                        {author.fullName}
                                    </h4>
                                    <p className="mb-6">{author.designation}</p>
                                    <p className="opacity-75">{description}</p>

                                    <div className="mt-12">
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                                            onClick={() => handleControl("prev")}
                                        >
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                            onClick={() => handleControl("next")}
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;