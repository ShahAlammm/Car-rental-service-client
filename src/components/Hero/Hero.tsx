
import HeroSlide from "../ui/HeroSlide";
import HeroText from "../ui/HeroText";

const Hero = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3">

                <HeroText />
            </div>
            <div className="col-span-2 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
                <HeroSlide />
            </div>
        </div>
    );
};

export default Hero;