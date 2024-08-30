import ChooseUs from "../../components/ChooseUs/ChooseUs";
import CountState from "../../components/ChooseUs/CountState";
import Featured from "../../components/FeaturedSection/Featured";
import CheckingCar from "../../components/Hero/CheckingCar";
import Hero from "../../components/Hero/Hero";
import SharedHero from "../../components/Shared/SharedHero";
import Testimonials from "../../components/Testimonial/Testimonials";





const HomePage = () => {
    return (
        <div>
            <Hero />
            <CheckingCar />
            <div className="container m-auto space-y-24">
                <Featured />
            </div>
            <CountState />
            <div className="container m-auto py-24">
                <ChooseUs />
            </div>
            <SharedHero />
            <Testimonials />

        </div>
    );
};

export default HomePage;